import projectForm from './projectForm';
import todoForm from './todoForm';
import { showTodos } from './render';

const content = document.querySelector('#content');
content.classList.add('container')


projectForm();
todoForm();
showTodos();
