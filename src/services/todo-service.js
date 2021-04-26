import axios from "axios";
import global from '../../global'

class TodoService {
    getTodos() {
        
    }
    createTodo(title) {

    }

    completeTodo(id) {
        axios.post(`${global.getUrl()}/complete/${id}`)
    }
}

export default TodoService();