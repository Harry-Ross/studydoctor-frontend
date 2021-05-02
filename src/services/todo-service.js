import axios from "axios";
import global from '../global'

class TodoService {
    async getTodos() {
        return ([
            {
                title: "Todo #1",
                description: "dasjhhjnasdjhdashjadsfjadshjsa",
                id: "1",
            },
            {
                title: ""
            },
            {

            }
        ])
    }
    createTodo(title) {

    }

    completeTodo(id) {
        axios.post(`${global.getUrl()}/complete/${id}`)
    }
}

export default new TodoService();