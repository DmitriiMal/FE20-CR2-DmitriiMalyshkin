const tasksArr = JSON.parse(tasksStr);
// console.table(tasksArr);

result = document.querySelector('#result');

for (let i = 0; i < tasksArr.length; i++) {
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
                src="${tasksArr[i].image}"
                alt="..." />
              <h1 class="card-title text-center m-3">${tasksArr[i].taskName}</h1>
              <p class="card-text text-center">
              ${tasksArr[i].description}
              </p>
              <div class="border-top border-bottom pt-3">
                <p>
                  <i
                    class="bi bi-exclamation-triangle-fill me-1 icon-custom"></i>
                  Priority level:
                  <button class="btn btn-success ms-1 btn-sm">${tasksArr[i].importance}</button>
                </p>

                <p>
                  <i class="bi bi-calendar3 me-1 icon-custom"></i>
                  Deadline: ${tasksArr[i].deadline}
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
}
