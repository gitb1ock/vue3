import MyAxiosRequest from "./request/index";

const myAxiosRequest = new MyAxiosRequest({
  baseURL: "http://httpbin.org",
  interceptors: {
    requestInterceptor: (config) => {
      console.log("发起请求");
      const token = "mytoken";
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    responseInterceptorCatch: (error) => {
      console.log("请求失败");
      return error;
    },
    responseInterceptor: (res) => {
      console.log("响应成功");
      console.log(res);
      return res;
    },
    requestInterceptorCatch: (error) => {
      console.log("响应失败");
      return error;
    },
  },
  // showLoading: true,
});
// const myAxiosRequest2 = new MyAxiosRequest({
//   baseURL: "",
//   interceptors: {},
// });

export default myAxiosRequest;
