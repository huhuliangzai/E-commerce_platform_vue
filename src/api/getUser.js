import axios from "axios";
export const getUser = ()=>{
    return axios({
        method: "POST",
        url: 'getUser'
    })
}