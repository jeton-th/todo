import { getAllProjects } from './project';
import { removeTodo } from './todo';

function render(element, repopulateElement) {
  element.innerHTML = '';
  repopulateElement();
}

function showTodos() {
  const projects = getAllProjects();

  const content = document.querySelector('#content');

  const todos = document.createElement('div');
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


      const remove = document.createElement('button');
      remove.innerHTML = 'Delete';
      detail.appendChild(remove);

      remove.addEventListener('click', () => {
        removeTodo(list[key].title, projects[projectName])
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
