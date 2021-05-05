import axios from "axios";
import global from '../global'
const apiUrl = global.getBackendUrl() + "/api/todos"

class TodoService {
    async getTodos() {
        let res = await axios.get(`${apiUrl}/list`);
        console.log(res.data)
        return res.data.todos;
    }
    async createTodo(title, description, dueDate) {
        let res = await axios.post(`${apiUrl}/create`, { title, description, dueDate })
        return res.data;
    }

    async completeTodo(id) {
        let res = await axios.post(`${apiUrl}/complete/${id}`)
        return res.data;
    }
}

export default new TodoService();