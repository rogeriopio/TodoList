import CreateDiv from './assets/js/createObj.js';
import DeleteAndCheck from './assets/js/deleteAndCheck.js';
import Filter from './assets/js/filterTodo.js';
import SaveLocal from './assets/js/saveLocalTodo.js';

// selectors
const todoInput = document.querySelector('.todo-input');
const todoBtn = document.querySelector('.todo-btn');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('#filter-todo');
// const todoContainer = document.querySelector('form');
// Instance
// functions

// event listners
todoBtn.addEventListener('click', (e) => {
    const createDiv = new CreateDiv(todoInput.value, todoList, todoInput);

    createDiv.createElement(e);
});
todoList.addEventListener('click', (e) => {
    const deleteCheck = new DeleteAndCheck();

    const item = e.target;
    if (item.classList[0] === 'trash-btn') {
        deleteCheck.delete(e);
    } else if (item.classList[0] === 'complete-btn') {
        deleteCheck.check(e);
    }
});

filterOption.addEventListener('click', (e) => {
    const filter = new Filter(todoList);
    filter.filterTodo(e);
});

document.addEventListener('DOMContentLoaded', () => {
    const saveLocal = new SaveLocal();

    saveLocal.getTodos();
});
