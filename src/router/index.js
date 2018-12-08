import Vue from 'vue'
import Router from 'vue-router'
import DashBoard from '@/components/DashBoard.vue'
import PostView from '@/views/CreatePostView'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'DashBoard',
            component: DashBoard
        }, {
            path: '/post',
            name: 'post',
            component: PostView(),
            children: [
                {
                    path: 'list',
                    name: 'PostsList',
                    component: () => import('@/components/PostsList.vue')
                },
                {
                    path: 'edit',
                    name: 'postEdit',
                    component: () => import('@/components/PostEdit.vue')
                }
            ],
        }
    ]
})
