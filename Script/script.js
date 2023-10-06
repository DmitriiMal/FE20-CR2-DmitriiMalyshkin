const tasksArr = JSON.parse(tasksStr);
// console.table(tasksArr);

result = document.querySelector('#result');

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
                  <button class="btn btn-success ms-1 btn-sm imp-btn"><span class="imp">${task.importance}</span></button>
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

let btns = document.querySelectorAll('.imp-btn');
let impVal = document.querySelectorAll('.imp');
// console.log(btns);

btns.forEach((btn, i) => {
  btn.addEventListener('click', function () {
    incImp(i);
    console.log(tasksArr[i].importance);
  });
});

function incImp(val) {
  tasksArr[val].importance++;
  if (tasksArr[val].importance == 6) {
    tasksArr[val].importance = 0;
  }
  impVal[val].innerHTML = `${tasksArr[val].importance}`;
}

// if (tasksArr[i].importance >= 1) {
//   btns[i].style.backgroundColor = 'green';
// } else if (tasksArr[i].importance >= 3) {
//   btns[i].style.backgroundColor = 'yellow';
// } else if (tasksArr[i].importance >= 5) {
//   btns[i].style.backgroundColor = 'green';
// }

// for (let i = 0; i < tasksArr.length; i++) {
//   btns[i].addEventListener('click', () => {
//     console.log(`test from ${i}`);
//     tasksArr[i].importance += 1;
//     console.log(tasksArr[i].importance);
//   });
// }

// btns.forEach((btn, i) => {
//   if (tasksArr[i].importance <= 1) {
//     btn.style.backgroundColor = 'green';
//   } else if (tasksArr[i].importance <= 3) {
//     btn.style.backgroundColor = 'yellow';
//   } else if (tasksArr[i].importance <= 5) {
//     btn.style.backgroundColor = 'red';
//   } else if (tasksArr[i].importance == 6) {
//     btn.style.backgroundColor = 'red';
//     tasksArr[i].importance = 0;
//   }
//   btn.addEventListener('click', () => {
//     console.log(`test from ${i}`);
//     tasksArr[i].importance++;
//     console.log(tasksArr[i].importance);
//   });
//   impVal.innerHTML = `${tasksArr[i].importance}`;
// });

// function incImp(i) {
//   console.log('test');
// }
// tasksArr[i].importance += 1;
// console.log(test););

// for (let i = 0; i < tasksArr.length; i++) {
//   result.innerHTML += `
//   <div>
//           <div class="card shadow-lg my-card mb-4">
//             <div class="card-body">
//               <div class="d-flex justify-content-between">
//                 <p class="text-white bg-info py-1 px-3 rounded-1">Task</p>
//                 <p>
//                   <i class="bi bi-bookmark me-3 icon-custom"></i>
//                   <i class="bi bi-three-dots-vertical icon-custom"></i>
//                 </p>
//               </div>
//               <img
//                 src="${tasksArr[i].image}"
//                 alt="..." />
//               <h1 class="card-title text-center m-3">${tasksArr[i].taskName}</h1>
//               <p class="card-text text-center">
//               ${tasksArr[i].description}
//               </p>
//               <div class="border-top border-bottom pt-3">
//                 <p>
//                   <i
//                     class="bi bi-exclamation-triangle-fill me-1 icon-custom"></i>
//                   Priority level:
//                   <button class="btn btn-success ms-1 btn-sm">${tasksArr[i].importance}</button>
//                 </p>

//                 <p>
//                   <i class="bi bi-calendar3 me-1 icon-custom"></i>
//                   Deadline: ${tasksArr[i].deadline}
//                 </p>
//               </div>
//             </div>
//             <div class="card-body ms-auto pt-0">
//               <a href="#" class="btn btn-danger me-1"
//                 ><i class="bi bi-trash-fill me-1 icon-custom"></i>Delete</a
//               >
//               <a href="#" class="btn btn-success"
//                 ><i class="bi bi-check-circle me-1 icon-custom"></i>Done</a
//               >
//             </div>
//           </div>
//         </div>
//   `;
// }
