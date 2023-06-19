const BuyRouter = [
    {
        path: '/:id',
        name: 'Buy',
        component: () => import('../../views/BuyView/Buy.vue')
    }
]

export default BuyRouter