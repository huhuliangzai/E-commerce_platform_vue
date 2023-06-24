import axios from 'axios';

export const searchProduct = (name)=>{
    return axios({
        method: 'GET',
        url: '/products/searchProduct',
        params: name
    })
}