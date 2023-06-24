import axios from 'axios';

export const insertComplaint = (data)=>{
    return axios({
        method: 'POST',
        url: '/complaints/insertComplant',
        data
    })
}