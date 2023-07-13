import AddList from './tudo.js';

const myList = new AddList();

const addButton = document.getElementById('add-button');
addButton.addEventListener('click', () => {
  const task = document.getElementById('task').value.trim();
  const completed = false;
  const index = myList.todoDetails.length + 1;
  if (task) {
    myList.addRow(task, completed, index);
    myList.displayList();
    document.getElementById('task').value = '';
  }
});

window.addEventListener('DOMContentLoaded', myList.displayList.bind(myList));
