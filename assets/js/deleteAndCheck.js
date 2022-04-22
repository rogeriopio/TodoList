import SaveLocal from './saveLocalTodo.js';

export default class DeleteAndCheck {
    constructor() {}

    delete(e) {
        const item = e.target;
        const todo = item.parentElement;
        console.log('todo: ', todo);
        // Animation
        todo.classList.add('fall');
        SaveLocal.removeLocalTodo(todo);
        todo.addEventListener('transitionend', () => {
            console.log('clicou');
            todo.remove();
        });
    }

    check(e) {
        const item = e.target;

        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}
