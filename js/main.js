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
                {
                    text: 'Questo è un TODO eseguito',
                    isDone: true
                },
                {
                    text: 'Questo è un TODO non eseguito',
                    isDone: false
                },
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
            },
            isDone(index){
                this.todoList[index].isDone = !this.todoList[index].isDone;
                console.log('ok, cambio lo stato');
            },

            /*numberOfRemain(){
                this.todoList.forEach((element) => {
                    console.log(element);
                    return 2+3;
                });
            }*/
            
        }
    }
);