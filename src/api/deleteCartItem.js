import axios from "axios";

export const deleteCartItem = (id)=>{
    return axios({
        method: 'GET',
        url: '/cartsItems/deleteCartsItem',
        params: id
    })
}