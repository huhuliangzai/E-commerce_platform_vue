import axios from 'axios';

export const editInformation = (data)=>{
    return axios({
        method: 'POST',
        url: '/editInformation',
        data
    })
}