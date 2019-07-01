import { Todo, addTodo } from './todo';

const todoform = (selectedProject) => {
  const content = document.querySelector('#content');
  const form = document.createElement('div');
  form.classList.add('todo-form');

  const newTodoButton = document.createElement('input');
  newTodoButton.setAttribute('type', 'button');
  newTodoButton.setAttribute('value', 'Add todo');
  newTodoButton.classList.add('.add-todo');

  const title = document.createElement('input');
  title.setAttribute('placeholder', 'Title');
  title.setAttribute('type', 'text');
  title.classList.add('.title');

  const description = document.createElement('textarea');
  description.setAttribute('placeholder', 'Description');
  description.classList.add('.description');

  const dueDate = document.createElement('input');
  dueDate.setAttribute('type', 'date');
  dueDate.classList.add('.due-date');

  const priority = document.createElement('input');
  priority.setAttribute('type', 'number');
  priority.classList.add('.priority');

  form.appendChild(title);
  form.appendChild(description);
  form.appendChild(dueDate);
  form.appendChild(priority);
  form.appendChild(newTodoButton);
  content.appendChild(form);

  newTodoButton.addEventListener('click', () => {
    const todo = new Todo(
      title.value,
      description.value,
      dueDate.value,
      priority.value,
    );
    addTodo(todo, selectedProject);


  });
};

export { todoform as default };
