const tasksArr = JSON.parse(tasksStr);
// console.table(tasksArr);

const result = document.querySelector('#result');

function sendCard(arr) {
  arr.forEach((task) => {
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
                  <button class="btn btn-success ms-1 btn-sm border-0 imp-btn"><span class="imp">${task.importance}</span></button>
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
sendCard(tasksArr);

const btns = document.querySelectorAll('.imp-btn');
const impVal = document.querySelectorAll('.imp');

changeColor();

function addEvent() {
  btns.forEach((btn, i) => {
    btn.addEventListener('click', function () {
      incImp(i);
      console.log(tasksArr[i].importance);
    });
  });
}
addEvent();

function incImp(val) {
  tasksArr[val].importance++;
  if (tasksArr[val].importance == 6) {
    tasksArr[val].importance = 0;
  }
  impVal[val].innerHTML = `${tasksArr[val].importance}`;
  changeColor();
}
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

document.querySelector('#sort').addEventListener('click', function () {
  let tasksSort = tasksArr.sort((a, b) => b.importance - a.importance);
  console.log(tasksSort);
  result.innerHTML = '';
  sendCard(tasksSort);
  addEvent();
  changeColor();
});
