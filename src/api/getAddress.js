import axios from 'axios'

export const getAddress= (data) =>{
    return axios({
        method: 'POST',
        url: 'address/getAddress',
        data
    })
}