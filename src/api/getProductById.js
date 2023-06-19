import axios from "axios";

export const getProductById = (id)=>{
    return axios({
        method: 'GET',
        url: '/products/getProductById',
        params: id
    })
}