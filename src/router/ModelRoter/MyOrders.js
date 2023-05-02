const MyOrdersRouter = [
    {
        path: '/orders',
        name: 'orders',
        component: ()=> import('../../views/MyOrdersView/MyOrderView.vue')
    }
]

export default MyOrdersRouter