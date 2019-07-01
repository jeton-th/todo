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


  for (let projectName in projects) {
    let project = document.createElement('p');
    project.classList.add('project-name');
    project.innerHTML = projectName;
    todos.appendChild(project);
    
    let list = JSON.parse(projects[projectName]).store;
    const ul = document.createElement('ul');
    todos.appendChild(ul);

    for (let key in list) {
      const li = document.createElement('li');
      li.innerHTML = list[key].title;
      ul.appendChild(li);
    }
  }

}

export {
  render,
  showTodos,
};
