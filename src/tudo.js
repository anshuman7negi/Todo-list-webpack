
export default class AddList {
    constructor() {
        const previousData = localStorage.getItem('todoData');
        this.todoDetails = previousData ? JSON.parse(previousData) : [];
    }

    displayList() {
        const reciveData = localStorage.getItem('todoData');
        if (reciveData && JSON.parse(reciveData).length > 0) {
            this.todoDetails = JSON.parse(reciveData);
            const row = document.getElementById('lists');
            row.innerHTML = '';
            for (let i = 0; i < this.todoDetails.length; i += 1) {
                row.innerHTML += `<li class="removeLine">
                            <div class="rowData" > <input class="edit-text" type="checkbox"  ${this.todoDetails[i].completed ? 'checked' : ''} /> 
                            <input class="editBtn" type="text" value="${this.todoDetails[i].title}" data-index="${i}" readonly /> </div>
                            <button id="${this.todoDetails[i].index}" class="remove-btn"> <i class="fas fa-trash"></i></button>
                        </li> <hr>`;
            }
            const removeBtn = document.querySelectorAll('.remove-btn');
            const removeLine = document.querySelectorAll('.removeLine')

            for(let i=0; i < removeBtn.length; i += 1) {
                removeBtn[i].addEventListener('click', (event) => {
                    removeLine[i].remove();
                    this.deleteRow(i);
                    this.displayList();

                });
            }
        }
    }

    addRow(title, completed, index) {
        const todo = { title, completed, index };
        this.todoDetails.push(todo);
        localStorage.setItem('todoData', JSON.stringify(this.todoDetails));
    }

    deleteRow(index) {
        this.todoDetails.splice(index,1);
        localStorage.setItem('todoData',JSON.stringify(this.todoDetails));
        this.displayList();
    }

    updateRowTitle(index, newTitle) {
        this.todoDetails[index].title = newTitle;
        localStorage.setItem('todoData', JSON.stringify(this.todoDetails));
        this.displayList();
    }


}
