import axios from 'axios';

export const request = (options) => {
    let option = {
        method: 'get',
        url: '',
        ...options
    }
    return axios(option)
        // axios.get('https://5b5e71c98e9f160014b88cc9.mockapi.io/api/v1/lists')
        .then(response => {
            console.log(response);
            return new Promise((resolve, reject) => {
                resolve(response)
            })
        })
        .catch(err => console.log(err))
}