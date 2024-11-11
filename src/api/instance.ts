
import axios from 'axios';
const instance = axios.create({
	baseURL: 'https://tproject.techpundits.net/api',
	headers: {
        "Content-Type":"application/json",
	},
});
export default instance;
