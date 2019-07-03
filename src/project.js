class Project {
  constructor(name) {
    this.name = name;
    this.store = [];
  }
}

function addProject(name) {
  const project = new Project(name);
  localStorage.setItem(project.name, JSON.stringify(project));
}

function getAllProjects() {
  const projects = [...localStorage];

  if (Object.keys(projects).length === 0 && projects.constructor === Object) {
    addProject('My todos');
  }

  return projects;
}

function getProject(name) {
  return JSON.parse(localStorage.getItem(name));
}

function editProject(project) {
  localStorage.setItem(project.name, JSON.stringify(project));
}

export {
  Project as default,
  getAllProjects,
  getProject,
  addProject,
  editProject,
};
