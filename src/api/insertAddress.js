import axios from 'axios';

export const insertAddress = (data)=>{
    return axios({
        method: 'POST',
        url: '/address/editAddress',
        data
    })
}