export default class Filter {
    constructor(todoList) {
        this.todoList = todoList;
    }

    filterTodo(e) {
        const todos = this.todoList.childNodes;
        console.log('e.target.value: ', e.target.value);
        todos.forEach((v) => {
            console.log('v', v);
            switch (e.target.value) {
                case 'all':
                    v.style.display = 'flex';

                    break;
                case 'completed':
                    if (v.classList.contains('completed')) {
                        v.style.display = 'flex';
                    } else {
                        v.style.display = 'none';
                    }
                    break;
                case 'uncompleted':
                    if (!v.classList.contains('completed')) {
                        v.style.display = 'flex';
                    } else {
                        v.style.display = 'none';
                    }
                    break;
                default:
                    break;
            }
        });
    }
}
