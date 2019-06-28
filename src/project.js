class Project {
  constructor(name) {
    this.name = name;
    this.store = [];
  }

  addTodo(todo) {
    this.store.push(todo);
  }
}

export { Project as default };
