import axios from "axios";
// import { notification } from "antd";

// create an axios instance
const service = axios.create({
	baseURL: "https://api.coingecko.com/api/v3", // api 的 base_url
	timeout: 5000, // request timeout
});

// request interceptor
service.interceptors.request.use(
	(config) => {
		// const [api] = notification.useNotification();
		// api.info({
		// 	message: `API ERROR`,
		// 	description: "123",
		// });
		return config;
	},
	(error) => {
		// const [api] = notification.useNotification();
		// api.info({
		// 	message: `API ERROR`,
		// 	description: "123",
		// });
		console.log({ error }); // for debug
		return Promise.reject(error);
	}
);

// response interceptor
service.interceptors.response.use(
	(response) => {
		// const [api] = notification.useNotification();
		// api.info({
		// 	message: `API ERROR`,
		// 	description: "123",
		// });
		return response;
	},
	(error) => {
		// const [api] = notification.useNotification();
		// api.info({
		// 	message: `API ERROR`,
		// 	description: "123",
		// });
		console.log({ error }); // for debug
		return Promise.reject(error);
	}
);

export default service;
