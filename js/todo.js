const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input");
//const toDOInput = document.querySelector("#todo-form input")

//form은 submit 이벤트를 가진다
//submit의 기본동작은 페이지를 새로고침 하는 것
//function을 이용해서 기본동작 막기

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  //△밑에처럼 newTodo를 그리기 전에 toDos를 가져와서 newTodo push하기
  paintToDo(newTodoObj);
  saveToDos(); //얘가 하는 일은 toDos array를 localStorage에 집어 넣는 것
}
toDoForm.addEventListener("submit", handleToDoSubmit);

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span); //span이 li 안에 있으니까
  li.appendChild(button);
  toDoList.appendChild(li);
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  //toDo는 toDOs DB에 있는 요소 중 하나
  saveToDos();
}

let toDos = [];

function saveToDos() {
  localStorage.setItem("todos", JSON.stringify(toDos));
}
//JSON.stringify() -> 뭐든 string으로 만들어줌
//localStorage에 array형태로 변수를 저장하기 위해

const TODOS_KEY = "todos";
const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parseToDos = JSON.parse(savedToDos);
  //▽js는 array에 있는 각각의 item에 대해 function을 실행할 수 있게 해줌
  parseToDos.forEach(paintToDo);
}
