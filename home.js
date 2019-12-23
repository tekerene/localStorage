//console.log("working");

//let name = "rene";
//let secondName = "technology";

//localStorage.setItem("names",name);
//localStorage.removeItem('names');
//localStorage.setItem('second', secondName);
//localStorage.clear();
//let localName = localStorage.getItem('names');
//console.log(localName);

// let names = ['rene', 'teke', 'school', 'johnpaul'];
// localStorage.setItem('people',JSON.stringify(names));
// let localName = JSON.parse(localStorage.getItem('people'));

// localName.forEach(element => {
//     console.log(element);
// });
let data = document.querySelector("#data");
let form = document.querySelector("form");
let btn = document.querySelector("#btn");
let ul = document.querySelector("ul");
//let task = [];
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
   
 //console.log("task");
  
    data.value = '';
    //task.push(data.value);
    //e.preventDefault();
});
let task2 = JSON.parse(localStorage.getItem('todo list'));
//console.log(task2);
task2.forEach(ele => {
let li = document.createElement('li');
li.innerHTML = `${ele}`;
ul.appendChild(li);
console.log(li);
});
let button = document.querySelector("#button");
button.addEventListener("click", (e) => {
localStorage.clear(button);


});

