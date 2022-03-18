const app = new Vue(
    {
        el: '#app',
        data: {
            inputTodoText: '',
            todoList: [
                'Questa è la struttura della TODO',
                'Questa è la struttura della TODO',
                'Questa è la struttura della TODO',
                'Questa è la struttura della TODO',
                'Questa è la struttura della TODO',
                'Questa è la struttura della TODO',
                'Questa è la struttura della TODO',
            ]
        },
        methods: {
            addNewTodo(element){
                this.todoList.push(element);
                console.log('aggiunto ' + element);
                this.inputTodoText = '';
            },
            removeTodo(index){
                this.todoList.splice(index, 1)
                console.log(`rimuovo elemento all'indice ${index}`)
            }
        }
    }
);