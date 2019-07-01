import { getAllProjects } from './project';

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

  // <div class="accordion" id="accordionExample">
  //       <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
  //         Collapsible Group Item #1
  //       </button>

  //   <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
  //       Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw de
  //   </div>
  // </div>

  for (let projectName in projects) {
    let project = document.createElement('h3');
    project.classList.add('project-name');
    project.innerHTML = projectName;
    todos.appendChild(project);

    let list = JSON.parse(projects[projectName]).store;
    const accordion = document.createElement('div');
    accordion.classList.add('accordion', 'accordionExample');
    todos.appendChild(accordion);

    let i = 0;
    for (let key in list) {
      const button = document.createElement('button');
      button.classList.add('btn', 'btn-link');
      button.setAttribute('type', 'button');
      button.setAttribute('data-toggle', `#collapseOne${i}`);
      button.setAttribute('data-target', 'collapse');
      button.setAttribute('aria-expanded', 'true');
      button.setAttribute('aria-controls', `collapseOne${i}`);
      button.innerHTML = list[key].title;

      //add element for desc, priority and date
      accordion.appendChild(button);
    }
  }
}

export { render, showTodos };
