import axios from "axios";
export const getUser = (data)=>{
    return axios({
        method: "POST",
        url: 'getUser',
        data
    })
}