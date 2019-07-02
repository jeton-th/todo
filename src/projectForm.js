import { render } from './render';
import { addProject, getAllProjects } from './project';


const form = document.createElement('div');
content.appendChild(form);

const projectForm = () => {
  const projects = getAllProjects();

  form.classList.add('project-form');
  const select = document.createElement('select');
  select.classList.add('projects');

  const newProjectField = document.createElement('input');
  newProjectField.classList.add('.new-project');
  newProjectField.setAttribute('type', 'text');
  newProjectField.setAttribute('placeholder', 'Project name');
  const newProjectButton = document.createElement('input');
  newProjectButton.classList.add('.add-project');
  newProjectButton.setAttribute('type', 'button');
  newProjectButton.value = 'Add project';

  let optionsArray = [];
  for (let key in projects) {
    if (Object.prototype.hasOwnProperty.call(projects, key)) {
      optionsArray.push(key)
    }
  }

  optionsArray.sort()
  optionsArray.forEach((title) => {
    const project = document.createElement('option');
    project.innerHTML = title;
    project.value = title;
    select.appendChild(project);
  })  

  newProjectButton.addEventListener('click', () => {
    addProject(newProjectField.value);
    render(form, projectForm);
  });

  form.appendChild(select);
  form.appendChild(newProjectField);
  form.appendChild(newProjectButton);

};

export { projectForm as default };
