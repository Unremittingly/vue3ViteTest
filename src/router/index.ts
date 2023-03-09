import { createRouter, createWebHashHistory } from "vue-router";

const Layout = () => import("@/layout/index.vue");

export const constantRoutes: any = [
  {
    path: "/",
    name: "root",
    component: Layout,
    redirect: "/home",
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes,
});

// 删除/重置路由
export function resetRoute(): void {
  router.getRoutes().forEach((route) => {
    const { name } = route;
    if (name) {
      router.hasRoute(name) && router.removeRoute(name);
    }
  });
}
export default router;
