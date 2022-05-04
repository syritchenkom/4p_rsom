import axios from 'axios';

const httpService = axios.create({
	withCredentials: true
});

export function setAuthorizationToken(token) {
	if (token) {
		//set token to every request
		httpService.defaults.headers.common['Authorization'] = `Token ${token}`;
	} else {
		delete httpService.defaults.headers.common['Authorization'];
	}
}

export default httpService;
