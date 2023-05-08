const HomeRouter = [
    {
        path: '/home',
        name: 'home',
        component: ()=> import('../../views/HomeView/HomeView.vue'),
    }
]

export default HomeRouter;