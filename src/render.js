import { getAllProjects } from './project';

function render(element, repopulateElement) {
  element.innerHTML = '';
  repopulateElement();
}

function showTodos() {
  // const projects = getAllProjects();

  // for (key in projects) {
  //   console.log(key)
  // }
}

export {
  render,
  showTodos,
};
