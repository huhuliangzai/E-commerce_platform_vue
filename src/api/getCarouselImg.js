import axios from "axios";

export const getCarouselImg = () =>{
    return axios({
        method: 'GET',
        url: '/carousel'
    })
}