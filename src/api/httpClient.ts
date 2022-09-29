import axios, { AxiosInstance, AxiosResponse } from "axios";

class HTTPClient {
    private _instance: AxiosInstance
    constructor(baseURL){
        this._instance = axios.create({
			baseURL,
			timeout: 15000,
			params: {},
		})
		this._instance.interceptors.request.use(this._requestInterceptor)
		this._instance.interceptors.response.use(
			this._responseInterceptor,
			this._responseErrorInterceptor,
		)
    }
	private _requestInterceptor = config =>  config;
    private _responseInterceptor = ({ data }: AxiosResponse) => data;
    private _responseErrorInterceptor = error => error;

    public get(url): Promise<AxiosResponse> {
		return this._instance.get(url)
	}
}

export default HTTPClient;