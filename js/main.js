class TodoItem {
  constructor(title){
    this.title = title;
    this.created = Date.now()
    this.completed = false;
  }
}

console.log(new TodoItem("Hello my first item"));