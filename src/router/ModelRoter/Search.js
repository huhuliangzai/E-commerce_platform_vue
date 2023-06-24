const SearchRouter = [
    {
        path: '/:name',
        name: 'Search',
        component: () => import('../../views/HomeView/SearchView.vue')
    }
]

export default SearchRouter;