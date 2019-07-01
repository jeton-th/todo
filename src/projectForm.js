const projectForm = (projects) => {
  const content = document.querySelector('#content');
  const form = document.createElement('div');
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

  for (let key in projects) {
    if (Object.prototype.hasOwnProperty.call(projects, key)) {
      const project = document.createElement('option');
      project.innerHTML = key;
      project.value = key;
      select.appendChild(project);
    }
  }


  form.appendChild(select);
  form.appendChild(newProjectField);
  form.appendChild(newProjectButton);
  content.appendChild(form);
};

export { projectForm as default };
