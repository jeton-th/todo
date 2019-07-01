import projectForm from './projectForm';
import Project from './project';
import Todo from './todo';
import todoForm from './todoForm';

const selectedProject = projectForm();
todoForm(selectedProject);
