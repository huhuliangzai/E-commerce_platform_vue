import {createRouter, createWebHistory} from 'vue-router'

import ShopCarRouter from './ModelRoter/Shopcar.js'
import MyOrderRouter from './ModelRoter/MyOrders.js'
import IndividualCenterRouter from './ModelRoter/IndividualCenter.js';
import HomeRouter from './ModelRoter/Home.js';
import LoginRouter from './ModelRoter/Login.js';
import BuyRouter from './ModelRoter/Buy.js';
import SearchRouter from './ModelRoter/Search.js';
import OrderRouter from './ModelRoter/Order.js';

const routes = [
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '/:catchAll(.*)',
        name: '404',
        component: () => import('../views/error/404.vue')
    },
    ...HomeRouter,
    ...ShopCarRouter,
    ...MyOrderRouter,
    ...IndividualCenterRouter,
    ...LoginRouter,
    ...BuyRouter,
    ...SearchRouter,
    ...OrderRouter
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
})

export default router
