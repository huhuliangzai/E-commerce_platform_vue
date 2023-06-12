import axios from "axios";

export const getHotSaleAndCrazyProducts = (categoryName) =>{
    return axios({
        method: 'GET',
        url: '/products/getHotSaleProducts',
        params: categoryName
    })
}