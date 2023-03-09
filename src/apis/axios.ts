import axios, { AxiosError, type AxiosInstance, type AxiosRequestConfig, type AxiosResponse } from "axios";
import { ElMessage } from "element-plus";
import { localClear } from "./index";
import router  from "@/router";

const service: AxiosInstance = axios.create({
  withCredentials: true,
  headers: {
    terminalType: "Manager",
    terminalId: "577",
    terminalSystem: "manage"
  },
  timeout: 30000,
});

const RE_LOGIN_CODE = [401, 403, 4001];

// 添加响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    const res = response.data;

    if (res.code && res.code !== 0) {
      // `token` 过期或者账号已在别处登录
      if (RE_LOGIN_CODE.includes(res.code)) {
        localClear();
        router.push({ path: "/login" }); // 去登录页面
        // resetRoute(); // 删除/重置路由
      }
      ElMessage.error(res.msg);
      return Promise.reject(service.interceptors.response);
    } else {
      return res;
    }
  },
  (error: AxiosError) => {
    ElMessage.error(error.message);
    return Promise.reject(error);
  },
);

export default service;
