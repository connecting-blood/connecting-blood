import axios from "axios";

const apiClient = axios.create({
    baseURL: "/api/", // Set your base URL
    headers: {
        "Content-Type": "application/json",
    },
});

// Add a request interceptor to automatically include the Authorization token
apiClient.interceptors.request.use(config => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, error => Promise.reject(error));

const apiCall = {
    get: (path, params = {}) => apiClient.get(path, { params }),
    post: (path, data = {}) => apiClient.post(path, data),
    put: (path, data = {}) => apiClient.put(path, data),
    patch: (path, data = {}) => apiClient.patch(path, data),
    delete: (path, data = {}) => apiClient.delete(path, { data }),
};

export default apiCall;