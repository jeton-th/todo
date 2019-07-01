import Todo from './todo';


const display = () => {
    function populateProjects(projects) {
        // const projects = getAllProjects();
        const select = document.querySelector('.projects');
      
        for (let key in projects) {
          if (projects.hasOwnProperty(key)) {
            const project = document.createElement('option');
            project.innerHTML = key;
            project.value = key;
            select.appendChild(project);
          }
        }
      }
      
      function render(element, repopulateElement) {
        element.innerHTML = '';
        repopulateElement();
      }
      
      const select = document.querySelector('.projects');
      const newTodoButton = document.querySelector('.add-todo');
      newTodoButton.addEventListener('click', () => {
        const projectName = select.options[select.selectedIndex].value;
        const title = document.querySelector('.title').value;
        const description = document.querySelector('.description').value;
        const dueDate = document.querySelector('.due-date').value;
        const priority = document.querySelector('.priority').value;
      
        const todo = new Todo(title, description, dueDate, priority);
        addTodo(todo, projectName);
      });
      
      const newProjectField = document.querySelector('.new-project');
      const newProjectButton = document.querySelector('.add-project');
      newProjectButton.addEventListener('click', () => {
        addProject(newProjectField.value);
        select.options[-1];
        // console.log(select.options);
        render(select, populateProjects);
      });
  };
  
  export { display as default }