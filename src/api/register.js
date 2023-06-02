import axios  from "axios";

export const register = (data) =>{
    return axios({
        method: 'POST',
        url: 'register',
        data
    })
}