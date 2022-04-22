export default class SaveLocal {
    constructor() {
        this.todoList = document.querySelector('.todo-list');
    }

    saveLocalTodos(todo) {
        // check
        let todos;

        if (localStorage.getItem('todos') == null) {
            todos = [];
        } else {
            todos = JSON.parse(localStorage.getItem('todos'));
        }

        todos.push(todo);
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    getTodos() {
        let todos;

        if (localStorage.getItem('todos') == null) {
            todos = [];
        } else {
            todos = JSON.parse(localStorage.getItem('todos'));
        }
        todos.forEach((v) => {
            const todoDiv = document.createElement('div');
            const newTodo = document.createElement('li');
            todoDiv.classList.add('todo');
            // create LI
            newTodo.innerText = v;
            newTodo.classList.add('todo-item');

            // append LI inside div
            todoDiv.appendChild(newTodo);

            // check mark button
            const completedButton = document.createElement('button');
            completedButton.innerHTML = `<i class="fas fa-check"></i>`;
            completedButton.classList.add('complete-btn');
            todoDiv.appendChild(completedButton);
            // trash  button

            const trashButton = document.createElement('button');
            trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
            trashButton.classList.add('trash-btn');
            todoDiv.appendChild(trashButton);

            this.todoList.appendChild(todoDiv);
        });
    }

    static removeLocalTodo(todo) {
        let todos;

        if (localStorage.getItem('todos') == null) {
            todos = [];
        } else {
            todos = JSON.parse(localStorage.getItem('todos'));
        }
        const todoIndex = todos.indexOf(todo.innerText);
        todos.splice(todoIndex, 1);
        localStorage.setItem('todos', JSON.stringify(todos));
    }
}
