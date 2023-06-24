import axios from 'axios';

export const deleteCollection = (data)=>{
    return axios({
        method: 'POST',
        url: '/collection/deleteCollection',
        data
    })
}