export default class CrudOperations {
  constructor() {
    const previousData = localStorage.getItem('todoData');
    this.todoDetails = previousData ? JSON.parse(previousData) : [];
  }

  addRow(title, completed, index, myList) {
    const todo = { title, completed, index };
    this.todoDetails.push(todo);
    localStorage.setItem('todoData', JSON.stringify(this.todoDetails));
    myList.displayList();
  }

  deleteRow(index, myList) {
    this.todoDetails.splice(index, 1);
    this.todoDetails.forEach((item, idx) => {
      item.index = idx + 1;
    });
    localStorage.setItem('todoData', JSON.stringify(this.todoDetails));
    myList.displayList();
  }

  updateRowTitle(index, newTitle, myList) {
    this.todoDetails[index].title = newTitle;
    localStorage.setItem('todoData', JSON.stringify(this.todoDetails));
    myList.displayList();
  }

  removeCompletedTask() {
    const incompleteTasks = this.todoDetails.filter((item) => item.completed === false);
    this.todoDetails = incompleteTasks;
    this.todoDetails.forEach((todo, index) => {
      todo.index = index + 1;
    });

    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('todoData', JSON.stringify(this.todoDetails));
    }

    return this.todoDetails;
  }
}