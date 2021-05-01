import axios from "axios";
import global from 

class ClassroomService {
    async getClasses() {
        let res = await axios.get(`${global.getUrl()}/classes`);
        return res.data;
    }
}

export default ClassroomService();