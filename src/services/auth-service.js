import axios from 'axios';
import global from '../global';
const apiUrl = global.getBackendUrl() + "/auth/me";

class AuthService {
    async getCurrentUser() {
        let res = await axios.get(apiUrl);
        return res.data;
    }
}

export default new AuthService();