import { getToken } from "./apis";
import router from "./router";

//白名单
const whiteList = ["/login"];

const unwatch = router.beforeEach((to, from, next) => {
  if (to.path == "/login") {
    // 如果路径是 /login 则正常执行
    next();
  } else {
    // 如果不是 /login，判断是否有 token
    if (!getToken()) {
      // 没有token
      if (whiteList.indexOf(to.path) !== -1) {
        // 在免登录白名单，直接进入
        next();
      } else {
        next({ path: "/login" }); // 否则全部重定向到登录页
      }
    } else {
      next();
    }
  }
});

export { unwatch };
