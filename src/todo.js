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

export { Todo as default, addTodo };
