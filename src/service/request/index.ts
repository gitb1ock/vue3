import axios from "axios";
import { ElLoading } from "element-plus";
import "element-plus/theme-chalk/el-loading.css";
import {
  MyAxiosRequestConfigWithoutHeaders,
  MyAxiosRequestInterceptors,
} from "@/service/request/type";

const DEFAULTLOADING = true;

class MyAxiosRequest {
  instance;
  interceptors?: MyAxiosRequestInterceptors;
  loadingInstance: any;
  showLoading: boolean;
  constructor(config: MyAxiosRequestConfigWithoutHeaders) {
    this.instance = axios.create(config);
    this.interceptors = config.interceptors;
    this.showLoading = config.showLoading ?? DEFAULTLOADING;
    //全局默认拦截器
    this.setUpDefaultInterceptors();
    //自定义拦截器
    this.setUpInterceptors();

    // console.log(this.instance.defaults.baseURL);
  }

  private setUpDefaultInterceptors() {
    this.instance.interceptors.request.use(
      (config) => {
        if (this.showLoading) {
          this.loadingInstance = ElLoading.service({
            text: "loading",
            fullscreen: true,
          });
        }
        return config;
      },
      (error) => {
        return error;
      },
    );

    this.instance.interceptors.response.use(
      (res) => {
        console.log(res);
        this.loadingInstance?.close();
        this.showLoading = DEFAULTLOADING;
        return res;
      },
      (error) => {
        this.loadingInstance.close();
        return error;
      },
    );
  }

  private setUpInterceptors() {
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch,
    );
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch,
    );
  }

  request<T>(config: MyAxiosRequestConfigWithoutHeaders): Promise<T> {
    if (config.showLoading === !DEFAULTLOADING) {
      this.showLoading = config.showLoading;
    }
    return this.instance.request(config);
  }

  get<T>(config: MyAxiosRequestConfigWithoutHeaders): Promise<T> {
    return this.request<T>({ ...config, method: "GET" });
  }
  post<T>(config: MyAxiosRequestConfigWithoutHeaders): Promise<T> {
    return this.request<T>({ ...config, method: "POST" });
  }
}

export default MyAxiosRequest;
