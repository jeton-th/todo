import { getProject, editProject } from './project';

class Todo {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

function addTodo(todo, projectName) {
  const project = getProject(projectName);
  project.store.push(todo);
  editProject(project);
}

function removeTodo(todoTitle, project) {
  // const todoTitle = project.store.find(e => e.title === todoTitle);
  const newStore = JSON.parse(project).store;
  const index = newStore.indexOf(todoTitle);
  newStore.splice(index, 1);
  // localStorage.setItem(project.name, store);
  console.log(JSON.parse(project).store);
  JSON.parse(project).store = newStore;
  // localStorage.setItem(project.name, JSON.stringify(project))
  // JSON.parse(project).
}
export { Todo, addTodo, removeTodo };
