const IndividualCenterRouter = [
    {
        path: '/IndividualCenter',
        name: 'IndividualCenter',
        component: () => import ('../../views/IndividualCenterView/IndividualCenterView.vue'),
        children: [
            {
                path: '',
                name: 'MyInformation',
                component: ()=> import('../../views/IndividualCenterView/IndividualCenterList/myInformation.vue')
            },
            {
                path: '',
                name: 'MyCollections',
                component: ()=> import('../../views/IndividualCenterView/IndividualCenterList/myCollections.vue')
            },
            {
                path: '',
                name: 'MyAddress',
                component: ()=> import('../../views/IndividualCenterView/IndividualCenterList/myAddress.vue')
            },
            {
                path: '',
                name: 'ComplaintsFeedback',
                component: ()=> import('../../views/IndividualCenterView/IndividualCenterList/complaintsFeedback.vue')
            },
        ],
        // redirect: '/IndividualCenter/myInformation'
    }
]

export default IndividualCenterRouter