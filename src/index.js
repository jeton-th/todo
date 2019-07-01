import projectForm from './projectForm';
import Project from './project';
import Todo from './todo';
import todoForm from './todoForm';
import showTodos from './render';

const selectedProject = projectForm();
todoForm(selectedProject);
showTodos();