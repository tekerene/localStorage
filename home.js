

let data = document.querySelector("#data");
let form = document.querySelector("form");
let btn = document.querySelector("#btn");
let ul = document.querySelector("ul");

form.addEventListener('submit', (e) => {
var data = document.querySelector("#data");
  var task;

  if (localStorage.getItem('todo list') === null){
      task = [];
  }  else {
      task = JSON.parse(localStorage.getItem('todo list'));
  }
  task.push(data.value);
   localStorage.setItem('todo list',JSON.stringify(task));
   
    data.value = '';
    
});
let task2 = JSON.parse(localStorage.getItem('todo list'));
task2.forEach(ele => {
let li = document.createElement('li');
li.innerHTML = `${ele}`;
ul.appendChild(li);
console.log(li);
});
let button = document.querySelector("#button");
button.addEventListener("click", (e) => {
localStorage.clear(button);
location.reload();


});

