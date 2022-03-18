const app = new Vue(
    {
        el: '#app',
        data: {
            inputTodoText: '',
            todoList: [
                /*{
                    text: 'Questa è la struttura della TODO',
                    isDone: false
                },*/
            ]
        },
        methods: {
            addNewTodo(element){
                // pulisco l'input
                this.inputTodoText = '';

                // se il campo non è vuoto creo un nuovo oggetto e lo inserisco in coda all'array
                if(element.trim() != ''){
                    const newObject = {
                        text: element.trim(),
                        isDone: false
                    };
                    this.todoList.push(newObject);
                    console.log('aggiunto ' + newObject);
                }
            },
            removeTodo(index){
                this.todoList.splice(index, 1)
                console.log(`rimuovo elemento all'indice ${index}`)
            }
        }
    }
);