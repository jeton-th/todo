import { getAllProjects } from './project';
import { removeTodo, Todo, addTodo, updateTodo } from './todo';

const content = document.querySelector('#content');
const todos = document.createElement('div');

function render(element, repopulateElement) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
  repopulateElement();
}

function showTodos() {
  const projects = getAllProjects();

  todos.classList.add('todos');
  content.appendChild(todos);

  let j = 0;
  for (let projectName in projects) {
    let project = document.createElement('h3');
    project.classList.add('project-name');
    project.innerHTML = projectName;
    todos.appendChild(project);

    let list = JSON.parse(projects[projectName]).store;

    let i = 0;
    for (let key in list) {
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

      edit.addEventListener('click', () => {
        const title = document.createElement('input');
        title.setAttribute('placeholder', 'Title');
        title.setAttribute('type', 'text');
        title.classList.add('.title');
        title.value = list[key].title;

        const description = document.createElement('textarea');
        description.setAttribute('placeholder', 'Description');
        description.classList.add('.description');
        description.value = list[key].description;

        const dueDate = document.createElement('input');
        dueDate.setAttribute('type', 'date');
        dueDate.classList.add('.due-date');
        dueDate.value = list[key].dueDate;

        const priority = document.createElement('input');
        priority.setAttribute('type', 'number');
        priority.classList.add('.priority');
        priority.value = list[key].priority;

        const save = document.createElement('button');
        save.innerHTML = 'Save';
        detail.appendChild(save);

        save.addEventListener('click', () => {
          const oldTitle = list[key].title;

          list[key].title = title.value;
          list[key].description = description.value;
          list[key].dueDate = dueDate.value;
          list[key].priority = priority.value;

          updateTodo(list[key], projectName, oldTitle);
          render(todos, showTodos);
        });

        detail.appendChild(title);
        detail.appendChild(description);
        detail.appendChild(dueDate);
        detail.appendChild(priority);
        detail.appendChild(save);
        // editTodo(list[key].title, projectName);
        // render(todos, showTodos);
      });

      const remove = document.createElement('button');
      remove.innerHTML = 'Delete';
      detail.appendChild(remove);

      remove.addEventListener('click', () => {
        removeTodo(list[key].title, projectName);
        render(todos, showTodos);
      });

      //add element for desc, priority and date
      accordion.appendChild(button);
      accordion.appendChild(detail);
      i += 1;
    }
    j += 1;
  }
}

export { render, showTodos };
