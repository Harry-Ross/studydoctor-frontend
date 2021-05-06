import axios from 'axios';
import global from '../global';
const apiUrl = global.getBackendUrl() + "/auth";

class AuthService {
    async getCurrentUser() {
        let res = await axios.get(apiUrl + "/me");
        return res.data;
    }

    async logout() {
        let res = await axios.post(apiUrl + "/logout")
        return res.data;
    }
}

export default new AuthService();