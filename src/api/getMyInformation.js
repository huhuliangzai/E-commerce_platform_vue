import axios from "axios";

export const getMyInformation = () =>{
    return axios({
        method: 'GET',
        url: 'getMyInformation'
    })
}