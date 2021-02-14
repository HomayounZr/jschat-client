import axios from 'axios';

const ROOT = 'http://localhost:3001';

class RestHelper {

    static defaultHeaders = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    };

    static authHeaders = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': ''
    };

    static formDataHeaders = {
        'Content-Type': 'multipart/form-data',
        'Accept': 'application/json',
        'Authorization': ''
    };

    static configure(){
        axios.defaults.baseURL = ROOT;
        axios.defaults.headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        };
    }

    static setAuthHeader = (token) => {
        this.authHeaders = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'bearer ' + token
        };

        this.formDataHeaders = {
            'Content-Type': 'multipart/form-data',
            'Accept': 'application/json',
            'Authorization': 'bearer ' + token
        };

        axios.defaults.headers = this.authHeaders;
        axios.defaults.baseURL = ROOT;
    }

    static users_login = (email, password) => {
        return new Promise((resolve,reject) => {
            const body = JSON.stringify({
                email: email,
                password: password
            });
            axios.post('/api/users/login',body)
            .then(res => res.data)
            .then(data => {
                resolve(data);
            }).catch(err => {
                reject(err);
            });
        });
    }

    static users_signup = (fullname,email,password) => {
        return new Promise((resolve,reject) => {
            const body = JSON.stringify({
                fullname: fullname,
                email: email,
                password: password
            });
            axios.post('/api/users/signup',body)
            .then(res => res.data)
            .then(data => {
                resolve(data);
            }).catch(err => {
                reject(err);
            });
        });
    }

}

export default RestHelper;