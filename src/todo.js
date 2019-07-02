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

function removeTodo(todoTitle, projectName) {
  const project = getProject(projectName);
  const newStore = project.store;
  let index = 0;
  newStore.forEach((e, i) => {
    if(todoTitle === e.title) index = i;
  });
  newStore.splice(index, 1);
  localStorage.setItem(projectName, JSON.stringify(project))
}
export { Todo, addTodo, removeTodo };
