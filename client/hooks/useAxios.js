import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

const useAxios = async ({ url, method, params = null }) => {
	const { data } = await axios[method](
		`${process.env.NEXT_PUBLIC_SERVER_URL}${url}`,
		{ params },
	);
	return data;
};

export default useAxios;
