import { createApp, watch } from "vue";
import App from "./App.vue";
import router from "./router";
// import store from "./store";
// import "./service/axios_demo";
import myAxiosRequest from "@/service";
import { createPinia } from "pinia";
import { RespDataType } from "@/service/request/type";
// import ElementPlus from "element-plus";
// import "element-plus/dist/index.css";

const pinia = createPinia();
watch(
  pinia.state,
  (state) => {
    // persist the whole state to the local storage whenever it changes
    localStorage.setItem("piniaState", JSON.stringify(state));
  },
  { deep: true },
);
createApp(App).use(router).use(pinia).mount("#app");

myAxiosRequest
  .post<RespDataType>({
    url: "/post",
    params: { name: "why", age: 18 },
    // interceptors: {
    //   requestInterceptor: (config) => {
    //     console.log("单独请求");
    //     return config;
    //   },
    //   responseInterceptor: (res) => {
    //     console.log("单独响应");
    //     return res;
    //   },
    // },
    transformRequest: () => console.log("请求前拦截"),
    transformResponse: (data, headers, status) => {
      console.log("响应前拦截");
      // console.log(data, headers, status);
    },
    showLoading: false,
  })
  .then((res) => {
    console.log("test");
    console.log(res.data);
    console.log(res.status);
    console.log(res.statusText);
  })
  .catch((err) => {
    console.log(err);
  });

// setTimeout(() => {
//   myAxiosRequest.request<RespDataType>({
//     url: "/get",
//     method: "GET",
//
//     showLoading: true,
//   });
// }, 5000);
//
// setTimeout(() => {
//   myAxiosRequest.request<RespDataType>({
//     url: "/get",
//     method: "GET",
//
//     showLoading: false,
//   });
// }, 10000);
