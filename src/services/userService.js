import axios from '../axios';

const handleLoginService = (username, password) => {
    let data = {
        username: username,
        password: password
    }
    return axios.post('http://127.0.0.1:8000/api/login', data);
}

export { handleLoginService }