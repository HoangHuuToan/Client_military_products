import Axios from 'axios';
import toastUtil from 'utilities/toast';
import { useAppStore } from 'stores/app-store';
import { useAuthStore } from 'stores/auth-store';

let statusCode = 0;

// merge params to axios config
function mergeAxiosConfig(data, config) {
  const axiosConfig = Object.assign(config || {}, {
    params: data,
  });
  return axiosConfig;
}

export default class RestClient {
  #client;

  #servicePath;

  constructor(servicePath) {
    this.client = this.createAxiosClient();
    this.servicePath = servicePath;
  }

  createAxiosClient() {
    const axiosInstance = Axios.create({
      baseURL: import.meta.env.VITE_API_URL,
      headers: {
        'Content-type': 'application/json',
      },
      withCredentials: true,
    });
    axiosInstance.interceptors.request.use(this.onRequest, this.onRequestError);
    return axiosInstance;
  }

  onRequest = async (config) => {
    const authStore = useAuthStore();
    if (config.headers) {
      config.headers.Authorization = `Bearer ${authStore.token}`;
    }
    // do something here before request
    return config;
  };

  onRequestError(error) {
    return Promise.reject(error);
  }

  #processThen(response, reject, resolve) {
    const result = response.data;
    statusCode = result.code;
    if (statusCode !== 0 && statusCode !== 404) {
      toastUtil.error(result.message);
      reject(result);
    }
    resolve(result);
  }

  #processError(error, reject) {
    if (Axios.isAxiosError(error)) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        if (error.response.data) {
          // error data from server
          const serviceErrorResponse = error.response.data;
          if (serviceErrorResponse.message) {
            toastUtil.error(serviceErrorResponse.message);
          }
          reject(serviceErrorResponse);
        } else {
          reject(error.response);
        }
      } else {
        toastUtil.exception(error);
        reject(error);
      }
    } else {
      reject(error);
    }
  }

  request(method, url, data, config) {
    const app = useAppStore();
    return new Promise((resolve, reject) => {
      // show loading
      app.showLoading();
      const axiosConfig = Object.assign(config, {
        url: `${this.servicePath}${url}`,
        method,
        data,
      });
      this.client
        .request(axiosConfig)
        .then((response) => {
          this.#processThen(response, reject, resolve);
        })
        .catch((error) => {
          this.#processError(error, reject);
        })
        .finally(() => {
          // hide loading
          if (!app.isMultiLoading) {
            app.hideLoading();
          }
        });
    });
  }

  get(url, data, config) {
    // merge params to axios config
    const axiosConfig = mergeAxiosConfig(data, config);
    return this.request('GET', url, null, axiosConfig);
  }

  post(url, data, config) {
    // merge params to axios config
    const axiosConfig = mergeAxiosConfig(data, config);
    delete axiosConfig.params;
    return this.request('POST', url, data, axiosConfig);
  }

  put(url, data, config) {
    // merge params to axios config
    const axiosConfig = mergeAxiosConfig(data, config);
    delete axiosConfig.params;
    return this.request('PUT', url, data, axiosConfig);
  }

  delete(url, data, config) {
    // merge params to axios config
    const axiosConfig = mergeAxiosConfig(data, config);
    return this.request('DELETE', url, null, axiosConfig);
  }
}
