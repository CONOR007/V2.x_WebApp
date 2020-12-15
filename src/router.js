import Vue from 'vue';
import Router from 'vue-router';
import login from '@/views/login';
import bottomTabbar from '@/views/tabbar';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        //==========================1.通过name展示带tab栏的视图(如App.vue所见)============================
        {
            //默认路由
            path: '/',
            redirect: '/login',
            meta: {
                requireAuth: true
            },
            components: {
                bottomTabbar: bottomTabbar,
            },
            children: [
  
            ]
        },
        //登陆
        {
            path: '/login',
            component: login
        },
    ]
});

router.beforeEach((to, from, next) => {
    next();
});

export default router;