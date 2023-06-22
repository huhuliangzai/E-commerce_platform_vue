import axios from 'axios';

export const insertCartItem = (cartsItem)=>{
    return axios({
        method: 'GET',
        url: '/cartsItems/insertCartsItem',
        params: cartsItem
    })
}