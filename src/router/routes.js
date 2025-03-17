import Home from "../views/home/index.vue";
import Login from "../views/login/index.vue";
export const STATIC_ROUTRS = [
    { path: "/", redirect: "/home" },   //路由重定向
    { path: "/home", component: Home },
    { path: "/login", component: Login },
]