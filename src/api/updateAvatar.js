import axios from 'axios';

export const updateAvatar  = (data)=>{
    return axios({
        method: 'POST',
        url: '/updateAvatar',
        data
    })
}