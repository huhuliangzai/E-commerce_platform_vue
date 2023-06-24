const OrderRouter = [
    {
        path:'/:id',
        name: 'order',
        component: ()=> import('../../views/BuyView/Order.vue')
    }
]

export default OrderRouter;