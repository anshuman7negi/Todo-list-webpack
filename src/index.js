import AddList from "./tudo.js";
const myList = new AddList();
myList.displayList();

const addButton = document.getElementById('add-button');
addButton.addEventListener('click', () => {
  const task = document.getElementById('task').value.trim();
  const completed=false;
  const index=myList.todoDetails.length + 1;
  if(task){
    myList.addRow(task,completed,index);
    myList.displayList();
    document.getElementById('task').value = '';
  }
});

const editBtn = document.querySelectorAll('.editBtn');
editBtn.forEach((editElement) => {
    editElement.addEventListener('click', (event) => {
        const index = event.target.getAttribute('data-index');
        const editInput = document.querySelector(`input.editBtn[data-index="${index}"]`);
        editInput.readOnly = false;
        editInput.addEventListener('blur', (event) => {
            const newTitle = event.target.value;
            myList.updateRowTitle(index, newTitle);
            event.target.readOnly = true;
        });
    });
});
