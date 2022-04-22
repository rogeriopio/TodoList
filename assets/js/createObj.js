import SaveLocal from './saveLocalTodo.js';

const saveLocal = new SaveLocal();
export default class CreateDiv {
    constructor(todoInputValue, todoList, todoInput) {
        this.todoInputValue = todoInputValue;
        this.todoList = todoList;
        this.todoInput = todoInput;
        this.todoDiv = document.createElement('div');
        this.newTodo = document.createElement('li');
    }

    // createDiv

    createElement(e) {
        if (this.todoInput.checkValidity()) {
            e.preventDefault();

            this.todoDiv.classList.add('todo');
            // create LI
            this.newTodo.innerText = this.todoInputValue;
            this.newTodo.classList.add('todo-item');
            // ADD TODO LocalStorage

            saveLocal.saveLocalTodos(this.todoInputValue);
            // append LI inside div
            this.todoDiv.appendChild(this.newTodo);

            // check mark button
            const completedButton = document.createElement('button');
            completedButton.innerHTML = `<i class="fas fa-check"></i>`;
            completedButton.classList.add('complete-btn');
            this.todoDiv.appendChild(completedButton);
            // trash  button

            const trashButton = document.createElement('button');
            trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
            trashButton.classList.add('trash-btn');
            this.todoDiv.appendChild(trashButton);

            this.todoList.appendChild(this.todoDiv);

            this.todoInput.value = '';
        } else {
            // this.todoInput.setCustomValidity('Favor Preencher');
            // this.todoInput.value = this.todoInput.validationMessage;
            //
        }
    }

    errorElement() {
        const errorTodoDiv = document.createElement('p');
        errorTodoDiv.classList.add('error');
        errorTodoDiv.innerText = 'Favor Preencher';
        return errorTodoDiv;
    }
}
