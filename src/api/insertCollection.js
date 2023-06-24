import axios from 'axios';

export const insertCollection = (data)=>{
    return axios({
        method: 'POST',
        url: '/collection/insertCollection',
        data
    })
}