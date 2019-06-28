// import pageLoad from './pageLoad';
import Project from './project';
import Todo from './todo';

function getProjects() {
  const projects = {...localStorage};

  if (Object.keys(projects).length === 0 && projects.constructor === Object) {
    newProject('My todos');    
  }

  return projects;
}

function newProject(name) {
  const p = new Project(name);
  localStorage.setItem(p.name, JSON.stringify(p));
}

const newProjectField = document.querySelector('.new-project');
const newProjectButton = document.querySelector('.add-project');
newProjectButton.addEventListener('click', () => {
  newProject(newProjectField.value);
});

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

// function newTodo(
//   title,
//   description,
//   dueDate,
//   priority,
//   project = defaultProject
// ) {
//   if (project !== defaultProject) {
//     project = newProject(project);
//   }

//   const todo1 = new Todo(title, description, dueDate, priority);
//   project.addTodo(todo1);
//   return project;
// }



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
