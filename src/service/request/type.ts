import {
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

export interface MyAxiosRequestInterceptors {
  requestInterceptor?: (
    config: InternalAxiosRequestConfig,
  ) => InternalAxiosRequestConfig;
  requestInterceptorCatch?: (error: any) => any;
  responseInterceptor?: (res: AxiosResponse) => AxiosResponse;
  responseInterceptorCatch?: (error: any) => any;
}

export interface MyAxiosRequestConfig extends InternalAxiosRequestConfig {
  interceptors?: MyAxiosRequestInterceptors;
}

export interface MyAxiosRequestConfigWithoutHeaders extends AxiosRequestConfig {
  showLoading?: boolean;
  interceptors?: MyAxiosRequestInterceptors;
}

export interface RespDataType {
  data: any;
  status: number;
  statusText: string;
}
