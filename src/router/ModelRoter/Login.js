const LoginRouter = [
    {
        path: '/login',
        name: 'login',
        component: () => import('../../views/LoginView/LoginView.vue')
    }
]
export default LoginRouter;