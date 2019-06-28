// import pageLoad from './pageLoad';
import Project from './project';
import Todo from './todo';

function getAllProjects() {
  const projects = {...localStorage};

  if (Object.keys(projects).length === 0 && projects.constructor === Object) {
    addProject('My todos');    
  }

  return projects;
}

getAllProjects();

function getProject(name) {
  return JSON.parse(localStorage.getItem(name));
}

function addProject(name) {
  const project = new Project(name);
  localStorage.setItem(project.name, JSON.stringify(project));
}

function editProject(project) {
  localStorage.setItem(project.name, JSON.stringify(project));
}

function addTodo(todo, projectName = 'My todos') {
  const project = getProject(projectName);
  project.store.push(todo);
  editProject(project);
}

const todo = new Todo('title', 'description', 'dueDate', 'priority')
addTodo(todo);

const todo2 = new Todo('title', 'description', 'dueDate', 'priority')
addTodo(todo2);




// const newProjectField = document.querySelector('.new-project');
// const newProjectButton = document.querySelector('.add-project');
// newProjectButton.addEventListener('click', () => {
//   newProject(newProjectField.value);
// });




// console.log(getProject('My todos'))

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

// get element with id addTodo
// add event listener to it
// onclick get the value of all the fields including the dropdown
// pass the values to new to do function

// let c = newTodo('Make diner', 'Cook pizza', new Date(), 1, 'Stringdd');

// console.log(c);

// user able to create his own project
//

// low priority
// medium
// high
