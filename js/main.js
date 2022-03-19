const app = new Vue(
    {
        el: '#app',
        data: {
            inputTodoText: '',
            todoList: [
                {
                    text: 'Questo è un TODO eseguito',
                    isDone: true
                },
                {
                    text: 'Questo è un TODO non eseguito',
                    isDone: false
                },
            ],
            totalRemain: function(){
                console.log('sono entrato nella funzione');
                // Mi creo una variabile di comodo locale
                let varTotalRemain = 0;
    
                this.todoList.forEach((element) => {
                    // Se l'elemento che sto ciclando è == a false incremento la mia variabile di comodo
                    if(element.isDone === false){
                        varTotalRemain ++;
                    }
                });
                console.log(varTotalRemain);
                return varTotalRemain;
            },
        },
        methods: {
            addNewTodo(element){
                // pulisco l'input
                this.inputTodoText = '';

                // se il campo non è vuoto creo un nuovo oggetto e lo inserisco in coda all'array
                if(element.trim() != ''){
                    const newObject = {
                        // Trasformo la prima lettere del testo in maiuscolo
                        text: element.trim().charAt(0).toUpperCase() + element.trim().slice(1),
                        isDone: false
                    };
                    this.todoList.push(newObject);
                    console.log('aggiunto ');
                    console.log(newObject);
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
                console.log('sono entrato nella funzione');
                let totalRemain = 0;

                this.todoList.forEach((element) => {
                    if(element.isDone === false){
                        totalRemain ++;
                    }
                });
                console.log(totalRemain);
                return totalRemain;
            }*/
        }
    }
);