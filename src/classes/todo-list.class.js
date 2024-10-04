export class TodoList{

    constructor () {
        //this.todos = [];
        this.cargarLocalStorge();
    }
    nuevoTodo (todo){
        this.todos.push(todo);
        this.guardarLocalStorge();
    }
    eliminarTodo (id) {
        this.todos= this.todos.filter(todo=>todo.id !=id);
        this.guardarLocalStorge();
    }
    marcarCompletado(id){
            for( const todo of this.todos){
                if(todo.id == id){
                    todo.completado = !todo.completado;
                    this.guardarLocalStorge();
                    break;
                }
            }
    }
    eliminarCompletados(){
        this.todos = this.todos.filter(todo => !todo.completado);
        this.guardarLocalStorge();
    }

    guardarLocalStorge(){
        localStorage.setItem('todo', JSON.stringify(this.todos));
    }

    cargarLocalStorge(){
        
        this.todos = (localStorage.getItem('todo'))
                    ? JSON.parse(localStorage.getItem('todo'))
                    : [];
    }
}