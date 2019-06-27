import pageLoad from './pageLoad';
import Project from './project';
import Todo from './todo';

pageLoad();

const todo1 = new Todo('Make lunch', 'Cook pasta', new Date(), 1);
const project1 = new Project('My todos', todo1);
