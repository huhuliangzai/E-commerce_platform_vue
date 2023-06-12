import axios from 'axios';

export const getProducts = (data) =>{
    return axios({
        method: 'POST',
        url: '/products/getProducts',
        data
    })
}