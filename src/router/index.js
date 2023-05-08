import { createRouter, createWebHistory} from 'vue-router'

import ShopCarRouter from './ModelRoter/Shopcar.js'
import MyOrderRouter from './ModelRoter/MyOrders.js'
import IndividualCenterRouter from './ModelRoter/IndividualCenter.js';
import HomeRouter from './ModelRoter/Home.js';
import LoginRouter from './ModelRoter/Login.js';
import BuyRouter from './ModelRoter/buy.js';


const routes = [
  {
    path:'/',
    redirect: '/home'
  },
  ...HomeRouter,
  ...ShopCarRouter,
  ...MyOrderRouter,
  ...IndividualCenterRouter,
  ...LoginRouter,
  ...BuyRouter
]

const router = createRouter({
    history:createWebHistory(),
    routes:routes,
})

export default router
