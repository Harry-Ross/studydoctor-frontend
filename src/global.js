class Global {
    getBackendUrl() {
        return process.env.REACT_APP_BACKEND_URL || "http://localhost:4000"
    } 
}
export default new Global();