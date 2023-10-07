let tasksArr = JSON.parse(tasksStr);
// console.table(tasksArr);

const result = document.querySelector('#result');

// Sends the cards into HTML
function sendCard() {
  tasksArr.forEach((task) => {
    result.innerHTML += `
  <div>
          <div class="card shadow-lg my-card mb-4">
            <div class="card-body">
              <div class="d-flex justify-content-between">
                <p class="text-white bg-info py-1 px-3 rounded-1">Task</p>
                <p>
                  <i class="bi bi-bookmark me-3 icon-custom"></i>
                  <i class="bi bi-three-dots-vertical icon-custom"></i>
                </p>
              </div>
              <img
                src="${task.image}"
                alt="..." />
              <h1 class="card-title text-center m-3">${task.taskName}</h1>
              <p class="card-text text-center">
              ${task.description}
              </p>
              <div class="border-top border-bottom pt-3">
                <p>
                  <i
                    class="bi bi-exclamation-triangle-fill me-1 icon-custom"></i>
                  Priority level:
                  <button class="btn btn-success ms-1 btn-sm border-0 imp-btn">${task.importance}</button>
                </p>

                <p >
                  <i class="bi bi-calendar3 me-1 icon-custom"></i>
                  Deadline: ${task.deadline}
                </p>
              </div>
            </div>
            <div class="card-body ms-auto pt-0">
              <a href="#" class="btn btn-danger me-1"
                ><i class="bi bi-trash-fill me-1 icon-custom"></i>Delete</a
              >
              <a href="#" class="btn btn-success"
                ><i class="bi bi-check-circle me-1 icon-custom"></i>Done</a
              >
            </div>
          </div>
        </div>
  `;
  });
}
sendCard();

let btns = document.querySelectorAll('.imp-btn');

// Changes color of buttons depending of their values
function changeColor() {
  tasksArr.forEach((task, i) => {
    if (task.importance <= 1) {
      btns[i].style.backgroundColor = 'green';
    } else if (task.importance <= 3) {
      btns[i].style.backgroundColor = 'yellow';
      btns[i].style.color = 'black';
    } else {
      btns[i].style.backgroundColor = 'red';
      btns[i].style.color = 'white';
    }
  });
}
changeColor();

// increases importance by 1 and reset to 0 after 5
function incImp(val) {
  tasksArr[val].importance++;
  if (tasksArr[val].importance == 6) {
    tasksArr[val].importance = 0;
  }
  btns[val].innerHTML = `${tasksArr[val].importance}`;
  changeColor();
}
// Adds event listeners to “importance” buttons
function addEvent() {
  // reassign buttons (this allous us to reuse the function by sorting)
  btns = document.querySelectorAll('.imp-btn');

  btns.forEach((btn, i) => {
    btn.addEventListener('click', function () {
      incImp(i);
    });
  });
}
addEvent();

// Attaches "Sort by priority" button
const sortBtn = document.querySelector('#sort');

// adds "Sort by priority" button the event listener and update the tasksArr
sortBtn.addEventListener('click', function () {
  let tasksSort = tasksArr.sort((a, b) => b.importance - a.importance);
  tasksArr = tasksSort;
  result.innerHTML = '';

  sendCard();
  addEvent();
  changeColor();
});
