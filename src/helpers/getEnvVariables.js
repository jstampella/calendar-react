export const getEnvVariables = () => {
	//import.meta.env; // tira error al hacer build
	return {
		VITE_API_URL: import.meta.env.VITE_API_URL,
		...import.meta.env,
	};
};
