import projectForm from './projectForm';
import Project from './project';
import Todo from './todo';

function getAllProjects() {
  const projects = {...localStorage};

  if (Object.keys(projects).length === 0 && projects.constructor === Object) {
    addProject('My todos');    
  }

  return projects;
}

projectForm(getAllProjects())