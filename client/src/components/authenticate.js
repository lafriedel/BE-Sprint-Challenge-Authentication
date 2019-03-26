import React from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3300/api';
axios.interceptors.request.use(
    function(options) {
        options.headers.authorization = localStorage.getItem("token");
        return options;
    },
    function(err) {
        return Promise.reject(err);
    }
);

export default function(Jokes) {
    return class Authenticate extends React.Component {
        render() {
            const token = localStorage.getItem("token");
            const unauthMessage = <div><p>Please log in to laugh at Dad Jokes.</p></div>;

            return <>{token ? <Jokes {...this.props} /> : unauthMessage}</>;
        }
    }
}