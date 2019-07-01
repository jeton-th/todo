
function getAllProjects() {
  const projects = {...localStorage};

  if (Object.keys(projects).length === 0 && projects.constructor === Object) {
    addProject('My todos');    
  }

  return projects;
}

function getProject(name) {
  return JSON.parse(localStorage.getItem(name));
}


function editProject(project) {
  localStorage.setItem(project.name, JSON.stringify(project));
}

function addTodo(todo, projectName) {
  const project = getProject(projectName);
  project.store.push(todo);
  editProject(project);
}



const select = document.querySelector('.projects');
const newTodoButton = document.querySelector('.add-todo');
newTodoButton.addEventListener('click', () => {
  const projectName = select.options[select.selectedIndex].value;
  const title = document.querySelector('.title').value;
  const description = document.querySelector('.description').value;
  const dueDate = document.querySelector('.due-date').value;
  const priority = document.querySelector('.priority').value;

  const todo = new Todo(title, description, dueDate, priority);
  addTodo(todo, projectName);
});

const newProjectField = document.querySelector('.new-project');
const newProjectButton = document.querySelector('.add-project');
newProjectButton.addEventListener('click', () => {
  addProject(newProjectField.value);
  select.options[-1];
  render(select, populateProjects);
});

populateProjects()






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
