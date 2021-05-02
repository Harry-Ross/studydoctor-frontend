import axios from "axios";
import global from '../global'
const apiUrl = global.getBackendUrl() + "/classroom"

axios.defaults.withCredentials = true;

class ClassroomService {
    async getClasses() {
        let res = await axios.get(`${apiUrl}/classes`);
        return res.data;
    }

    async getClasswork(courseId) {
        let res = await axios.get(`${apiUrl}/classwork`, { params: { } });
        return res.data;
    }
}

export default new ClassroomService();