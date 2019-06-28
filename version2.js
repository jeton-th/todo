// import pageLoad from './pageLoad';
import Project from './project';
import Todo from './todo';

function getAllProjects() {
  const projects = { ...localStorage };

  if (Object.keys(projects).length === 0 && projects.constructor === Object) {
    newProject('My todos');
  }

  return projects;
}

getAllProjects();

function newProject(name) {
  const p = new Project(name);
  localStorage.setItem(p.name, JSON.stringify(p));
  return p;
}

const newProjectField = document.querySelector('.new-project');
const newProjectButton = document.querySelector('.add-project');
newProjectButton.addEventListener('click', () => {
  //   newProject(newProjectField.value);
});

const newTodoButton = document.querySelector('.add-todo');

newTodoButton.addEventListener('click', () => {
  const select = document.querySelector('#project-options');
  const title = document.querySelector('.title').value;
  const description = document.querySelector('.description').value;
  const dueDate = document.querySelector('.dueDate').value;
  const priority = document.querySelector('.priority').value;
  const selectedProject = select.options[select.selectedIndex].value;

  //   const selectedStorage = JSON.parse(localStorage.getItem(selectedProject));

  const todo = newTodo(title, description, dueDate, priority);

  const a = getProject(selectedProject);

  if (a === null) {
    a = newProject(selectedProject);
  }

  function addTodo(todo) {
    a.store.push(todo);
  }

  addTodo(todo);

  localStorage.setItem(a.name, JSON.stringify(a));
});

function getProject(name) {
  return JSON.parse(localStorage.getItem(name));
}

// const todo1 = new Todo('Make lunch', 'Cook pasta', new Date(), 1);

// const project1 = new Project('My todos', todo1);

// const todo2 = new Todo('Make dinner', 'Salad', new Date(), 1);
// const project2 = new Project('Other todo', todo2);

// localStorage.setItem(project1.name, JSON.stringify(todo1));
// localStorage.setItem(project2.name, JSON.stringify(todo2));

// const p = {...localStorage};

// for (var key in p) {
//   if (p.hasOwnProperty(key)) {
//       console.log(key + " -> " + p[key]);
//   }
// }

// console.log(a)

// const defaultProject = new Project('My todos');

function newTodo(title, description, dueDate, priority) {
  const todo = new Todo(title, description, dueDate, priority);

  return todo;
}

// get element with id addTodo
// add event listener to it
// onclick get the value of all the fields including the dropdown
// pass the values to new to do function

let c = newTodo('Make diner', 'Cook pizza', new Date(), 1, 'Stringdd');

// console.log(c.add);

// user able to create his own project
//

// low priority
// medium
// high