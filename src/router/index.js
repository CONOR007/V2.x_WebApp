import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/layout/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName:'login' */ "@/views/login/index.vue")
  },
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "", // 默认子路由
        name: "home",
        // import(url) 路由懒加载,打包到名为home的文件中去
        component: () =>
          import(/* webpackChunkName:'home' */ "@/views/home/index.vue")
      },
      {
        path: "/role",
        name: "role",
        component: () =>
          import(/* webpackChunkName: 'role' */ "@/views/role/index.vue")
      },
      {
        path: "/menu",
        name: "menu",
        component: () =>
          import(/* webpackChunkName: 'menu' */ "@/views/menu/index.vue")
      },
      {
        path: "/resource",
        name: "resource",
        component: () =>
          import(
            /* webpackChunkName: 'resource' */ "@/views/resource/index.vue"
          )
      },
      {
        path: "/course",
        name: "course",
        component: () =>
          import(/* webpackChunkName: 'course' */ "@/views/course/index.vue")
      },
      {
        path: "/user",
        name: "user",
        component: () =>
          import(/* webpackChunkName: 'user' */ "@/views/user/index.vue")
      },
      {
        path: "/advert",
        name: "advert",
        component: () =>
          import(/* webpackChunkName: 'advert' */ "@/views/advert/index.vue")
      },
      {
        path: "/advert-space",
        name: "advert-space",
        component: () =>
          import(
            /* webpackChunkName: 'advert-space' */ "@/views/advert-space/index.vue"
          )
      }
    ]
  },
  {
    // VueRouter 匹配规则是从上往下 建议把*放最后
    path: "*",
    name: "404",
    component: () =>
      import(/* webpackChunkName: '404' */ "@/views/error-page/404.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
