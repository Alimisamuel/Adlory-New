import axios from "axios";

let token = localStorage.getItem("token");

let axiosClient = axios.create({
		// baseURL: `${import.meta.env.VITE_BASE_URL}`,
		baseURL: "https://adlory.herokuapp.com",
		headers: {
			"content-type": "application/json",
			// "X-DeviceKey": `${import.meta.env.VITE_X_DEVICE_KEY}`,	≈																														
			Authorization: `Bearer ${token}`,
		},
	});



    export default axiosClient;