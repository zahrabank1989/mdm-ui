import axios, { AxiosRequestConfig } from 'axios';

interface LoginResponse {
    userName: string;  // Add userName to the response type
    token: string;
    expiredDate: string;  // Include expiration date
}

// Create an Axios instance
const apiClient = axios.create({
    baseURL: 'http://192.168.171.40:1022',  //backend API base URL
    headers: {
        'Content-Type': 'application/json',  // request content type (JSON)
    }
});

// Add request interceptor to include the JWT token
apiClient.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        const token = localStorage.getItem('token');  // Retrieve token from localStorage
        if (token) {
            config.headers!['Authorization'] = `Bearer ${token}`;  // Add token to Authorization header
        }
        return config;
    },
    (error) => Promise.reject(error)  // Handle any errors with the request
);

// API methods with proper TypeScript types
const login = async (username: string, password: string, captcha: string): Promise<LoginResponse> => {
    try {
        const response = await apiClient.post<LoginResponse>('/Account/Login', {
            login: {
                userName: username,
                password: password,
                captcha: captcha,
            },
        });
        return response.data;  // Return the response data
    } catch (error) {
        console.error('Login failed:', error.response ? error.response.data : error.message);
        throw error;  // Rethrow the error if needed
    }
};

const logout = (): void => {
    localStorage.removeItem('token');  // Remove token from localStorage to log out
    window.location.href = '/login';    // Redirect user to the login page
};

export default {
    login,
    logout,
};
