import axios from "axios";

export const getAllCategory = () => {
    return axios({
        method: 'GET',
        url: '/getAllCategories'
    })
}