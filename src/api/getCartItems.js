import axios from 'axios'

export const getCartItems = (id)=>{
    return axios({
        method: 'GET',
        url: '/cartsItems/getCartsItemByUser',
        params: id
    })
}