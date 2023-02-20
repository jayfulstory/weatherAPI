const toDoForm = document.getElementById('todo__form');
const toDoInput = document.querySelector('#todo__form input');
const toDoList = document.getElementById('todo__list');

const TODOS_KEY = 'todos';
let toDos = [];

function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  toDos = toDos.filter(toDo => String(toDo.id) !== li.id);
  li.remove();
  saveTodos();
  // localStorage.removeItem()
}

function paintTodo(newTodo) {
  const li = document.createElement('li');
  li.id = newTodo.id;
  const span = document.createElement('span');
  span.innerHTML = newTodo.text;
  const button = document.createElement('button');
  button.innerHTML = '❌';
  button.addEventListener('click', deleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = '';
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveTodos();
}

toDoForm.addEventListener('submit', handleToDoSubmit);

const savedTodo = localStorage.getItem(TODOS_KEY);

if (savedTodo !== null) {
  const parsedTodos = JSON.parse(savedTodo);
  toDos = parsedTodos;
  parsedTodos.forEach(paintTodo);
}
