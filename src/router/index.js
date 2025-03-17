import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import { STATIC_ROUTRS } from "./routes.js"
import store from "store";

//创建路由实例（本质上是一个plugin）
export const router = createRouter({
    history: createWebHistory(),
    routes: STATIC_ROUTRS
});

router.beforeEach((to, from, next) => {
    const isLogin = Boolean(store.get("cookie"));
    if (isLogin || to.fullPath === "/login") {
        next();
    } else {
        next("/login");
    }
});
