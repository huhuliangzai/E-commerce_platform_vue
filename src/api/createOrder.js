import axios from 'axios';

export const createOrder = (data) =>{
    return axios({
        method: 'POST',
        url: '/orders/createOrder',
        data
    })
}