const IndividualCenterRouter = [
    {
        path: '/IndividualCenter',
        name: 'IndividualCenter',
        component: () => import ('../../views/IndividualCenterView/IndividualCenterView.vue'),
        children: [
            {
                path: 'myInformation',
                name: 'MyInformation',
                component: ()=> import('../../views/IndividualCenterView/IndividualCenterList/myInformation.vue')
            },
            {
                path: 'myCollections',
                name: 'MyCollections',
                component: ()=> import('../../views/IndividualCenterView/IndividualCenterList/myCollections.vue')
            },
            {
                path: 'myAddress',
                name: 'MyAddress',
                component: ()=> import('../../views/IndividualCenterView/IndividualCenterList/myAddress.vue')
            },
            {
                path: 'complaintsFeedback',
                name: 'ComplaintsFeedback',
                component: ()=> import('../../views/IndividualCenterView/IndividualCenterList/complaintsFeedback.vue')
            },
        ],
        // redirect: '/IndividualCenter/myInformation'
    }
]

export default IndividualCenterRouter