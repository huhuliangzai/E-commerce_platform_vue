import axios from 'axios';

export const changeStatus = (data)=>{
    return axios({
        method: 'POST',
        url: '/orderDetails/changeStatus',
        data
    })
}