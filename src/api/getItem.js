import axios from 'axios';

export const getItem = (id)=>{
    return axios({
        method: 'GET',
        url:'/cartsItems/getItem',
        params: id
    })
}