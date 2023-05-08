const LoginRouter = [
    {
        path: '/login',
        name: 'login',
        component: () => import('../../views/LoginView/Login.vue')
    }
]
export default LoginRouter;