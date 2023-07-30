export default class CrudOperations {
  constructor() {
    const previousData = typeof localStorage !== 'undefined' ? localStorage.getItem('todoData') : null;
    this.todoDetails = previousData ? JSON.parse(previousData) : [];
  }

  addRow(title, completed, index, myList) {
    const todo = { title, completed, index };
    this.todoDetails.push(todo);
    this.updateLocalStorageAndDisplayList(myList);
  }

  deleteRow(index, myList) {
    this.todoDetails.splice(index, 1);
    this.todoDetails.forEach((item, idx) => {
      item.index = idx + 1;
    });
    this.updateLocalStorageAndDisplayList(myList);
  }

  updateRowTitle(index, newTitle, myList) {
    this.todoDetails[index].title = newTitle;
    localStorage.setItem('todoData', JSON.stringify(this.todoDetails));
    myList.displayList();
  }

  removeCompletedTask(myList) {
    const incompleteTasks = this.todoDetails.filter((item) => item.completed === false);
    this.todoDetails = incompleteTasks;
    this.todoDetails.forEach((todo, index) => {
      todo.index = index + 1;
    });

    this.updateLocalStorageAndDisplayList(myList);
    return this.todoDetails;
  }

  updateLocalStorageAndDisplayList(myList) {
    localStorage.setItem('todoData', JSON.stringify(this.todoDetails));
    myList.displayList();
  }
}