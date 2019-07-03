import { Todo, addTodo } from './todo';
import { render, showTodos } from './render';

const todoform = () => {
  const form = document.createElement('div');
  form.classList.add('todo-form');

  const h3 = document.createElement('h3')
  h3.innerHTML = 'New Todo'

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
  priority.setAttribute('min', '1');
  priority.setAttribute('max', '10');

  priority.setAttribute('placeholder', 'Your priority , from 1 to 10');
  priority.classList.add('.priority');

  form.appendChild(h3)
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
      priority.value
    );

    const selectedProject = document.querySelector('.projects').value;
    addTodo(todo, selectedProject);

    const todos = document.querySelector('.todos');
    render(todos, showTodos);
  });
};

export { todoform as default };
