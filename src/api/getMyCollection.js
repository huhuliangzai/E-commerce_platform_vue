import axios from 'axios';

export const getMyCollectin = (id) =>{
    return axios({
        method: 'GET',
        url: '/collection/getMyCollection',
        params: id
    })
}