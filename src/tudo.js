export default class AddList {
  constructor() {
    const previousData = localStorage.getItem('todoData');
    this.todoDetails = previousData ? JSON.parse(previousData) : [];
  }

  displayList() {
    const reciveData = localStorage.getItem('todoData');
    const row = document.getElementById('lists');
    row.innerHTML = '';
    if (reciveData && JSON.parse(reciveData).length > 0) {
      this.todoDetails = JSON.parse(reciveData);

      for (let i = 0; i < this.todoDetails.length; i += 1) {
        row.innerHTML += `<li class="removeLine">
                            <div class="rowData" > <input class="edit-text" type="checkbox"  ${this.todoDetails[i].completed ? 'checked' : ''} /> 
                            <input class="editBtn" type="text" value="${this.todoDetails[i].title}" data-index="${i}" readonly /> </div>
                            <button id="${i}" class="remove-btn"> <i class="fas fa-trash"></i></button>
                        </li> <hr>`;
      }
      // ------------------Remove Row Code-------------------------------------
      const removeBtn = document.querySelectorAll('.remove-btn');
      removeBtn.forEach((btn, index) => {
        btn.addEventListener('click', () => {
          this.deleteRow(index);
        });
      });
      // -----------------Edit input Code--------------------------------
      const editBtn = document.querySelectorAll('.editBtn');
      editBtn.forEach((editElement) => {
        editElement.addEventListener('click', () => {
          const index = editElement.getAttribute('data-index');
          const editInput = document.querySelector(`input.editBtn[data-index="${index}"]`);
          editInput.readOnly = false;
          editInput.addEventListener('blur', (event) => {
            const newTitle = event.target.value;
            this.updateRowTitle(index, newTitle);
            event.target.readOnly = true;
          });
        });
      });
      // -------------------checkbox code--------------------------
      const checkboxes = document.querySelectorAll('.edit-text');
      checkboxes.forEach((checkbox) => {
        const index = checkbox.parentNode.querySelector('.editBtn').getAttribute('data-index');
        const editInput = checkbox.parentNode.querySelector('.editBtn');
        const { completed } = this.todoDetails[index];

        checkbox.checked = completed;
        editInput.classList.toggle('completed', completed);

        checkbox.addEventListener('change', (event) => {
          const isChecked = event.target.checked;
          editInput.classList.toggle('completed', isChecked);
          this.todoDetails[index].completed = isChecked;
          localStorage.setItem('todoData', JSON.stringify(this.todoDetails));
        });
      });
      // -----------------ClearCompletedBtn-----------------------------------
      document.getElementById('clearCompletedBtn').addEventListener('click', this.removeCompletedTask);
    }
  }

  addRow(title, completed, index) {
    const todo = { title, completed, index };
    this.todoDetails.push(todo);
    localStorage.setItem('todoData', JSON.stringify(this.todoDetails));
  }

  deleteRow(index) {
    this.todoDetails.splice(index, 1);
    for (let i = index; i < this.todoDetails.length; i += 1) {
      this.todoDetails[i].index = i + 1;
    }
    localStorage.setItem('todoData', JSON.stringify(this.todoDetails));
    this.displayList();
  }

  updateRowTitle(index, newTitle) {
    this.todoDetails[index].title = newTitle;
    localStorage.setItem('todoData', JSON.stringify(this.todoDetails));
    this.displayList();
  }

  removeCompletedTask = () => {
    const incompleteTasks = this.todoDetails.filter((item) => item.completed === false);
    this.todoDetails = incompleteTasks;
    this.todoDetails.forEach((todo, index) => {
      todo.index = index + 1;
    });

    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('todoData', JSON.stringify(this.todoDetails));
    }

    this.displayList();
  }
}
