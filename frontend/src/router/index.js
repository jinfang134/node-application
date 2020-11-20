import Vue from "vue";
import Router from "vue-router";


Vue.use(Router);


const router = new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: ()=>import('@/views/index.vue'),
    },
    {
      path: "/login",
      name: "login",
      component: ()=>import('@/views/login.vue')
    },
  ]
});


export default router;
