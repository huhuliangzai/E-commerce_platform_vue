import axios from 'axios';


export const getAllorders = (id,data)=>{
    return axios({
        method: 'POST',
        url: '/orders/getAllOrders',
        data: id
    })
}