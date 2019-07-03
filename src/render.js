/* eslint no-param-reassign: ["error",
{ "props": true, "ignorePropertyModificationsFor": ["todo", "edit"] }] */

import { getAllProjects } from './project';
import {
  removeTodo, updateTodo,
} from './todo';

const todos = document.createElement('div');

function render(element, repopulateElement) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
  repopulateElement();
}

function editTodo(projectName, edit, detail, todo) {
  const editForm = document.createElement('div');
  editForm.classList.add('edit-form', 'hidden');
  detail.appendChild(editForm);

  const editTitle = document.createElement('input');
  editTitle.setAttribute('placeholder', 'Title');
  editTitle.setAttribute('type', 'text');
  editTitle.classList.add('.title');
  editTitle.value = todo.title;

  const editDescription = document.createElement('textarea');
  editDescription.setAttribute('placeholder', 'Description');
  editDescription.value = todo.description;

  const editDate = document.createElement('input');
  editDate.setAttribute('type', 'date');
  editDate.value = todo.dueDate;

  const editPriority = document.createElement('input');
  editPriority.setAttribute('type', 'number');
  editPriority.value = todo.priority;

  const save = document.createElement('button');
  save.innerHTML = 'Save';
  editForm.appendChild(save);

  save.addEventListener('click', () => {
    const oldTitle = todo.title;

    todo.title = editTitle.value;
    todo.description = editDescription.value;
    todo.dueDate = editDate.value;
    todo.priority = editPriority.value;

    updateTodo(todo, projectName, oldTitle);
    render(todos, showTodos);
  });

  editForm.appendChild(editTitle);
  editForm.appendChild(editDescription);
  editForm.appendChild(editDate);
  editForm.appendChild(editPriority);
  editForm.appendChild(save);

  edit.addEventListener('click', () => {
    editForm.classList.toggle('hidden');
    edit.innerHTML = (edit.innerHTML === 'Edit') ? 'Cancel' : 'Edit';
  });
}

function showTodos() {
  const projects = getAllProjects();

  todos.classList.add('todos');
  content.appendChild(todos);

  let j = 0;
  for (const projectName in projects) {
    const project = document.createElement('h3');
    project.classList.add('project-name');
    project.innerHTML = projectName;
    todos.appendChild(project);

    const list = JSON.parse(projects[projectName]).store;

    let i = 0;
    for (const key in list) {
      const accordion = document.createElement('div');
      accordion.id = 'accordionExample';
      accordion.classList.add('accordion');
      todos.appendChild(accordion);

      const button = document.createElement('button');
      button.classList.add('btn', 'btn-link');
      button.setAttribute('type', 'button');
      button.setAttribute('data-toggle', 'collapse');
      button.setAttribute('data-target', `#collapse${j}${i}`);
      button.setAttribute('aria-expanded', 'true');
      button.setAttribute('aria-controls', `collapse${j}${i}`);
      button.innerHTML = list[key].title;

      const detail = document.createElement('div');
      detail.id = `collapse${j}${i}`;
      detail.classList.add('collapse');
      detail.setAttribute('aria-labelledby', `heading${j}${i}`);
      button.setAttribute('data-parent', '#accordionExample');

      const description = document.createElement('p');
      description.innerHTML = list[key].description;
      detail.appendChild(description);

      const date = document.createElement('p');
      date.innerHTML = list[key].dueDate;
      detail.appendChild(date);

      const priority = document.createElement('p');
      priority.innerHTML = list[key].priority;
      detail.appendChild(priority);

      const edit = document.createElement('button');
      edit.innerHTML = 'Edit';
      detail.appendChild(edit);

      editTodo(projectName, edit, detail, list[key]);

      const remove = document.createElement('button');
      remove.innerHTML = 'Delete';
      detail.appendChild(remove);

      remove.addEventListener('click', () => {
        removeTodo(list[key].title, projectName);
        render(todos, showTodos);
      });

      // add element for desc, priority and date
      accordion.appendChild(button);
      accordion.appendChild(detail);
      i += 1;
    }
    j += 1;
  }
}

export { render, showTodos };
