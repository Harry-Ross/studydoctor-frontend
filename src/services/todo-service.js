import axios from "axios";
import global from '../global'
const apiUrl = global.getBackendUrl() + "/api/todos"

class TodoService {
    async getTodos() {
        let res = await axios.get(`${apiUrl}/list`);
        return res.data;
    }
    async createTodo(title, description, classroomTask) {
        let res = await axios.post(`${apiUrl}/create`, { title, description, classroomTask })
        return res.data;
    }

    async completeTodo(id) {
        let res = await axios.post(`${apiUrl}/complete/${id}`)
        return res.data;
    }
}

export default new TodoService();