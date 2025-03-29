import axios from "axios";

const apiClient = axios.create({
    baseURL: "/api/", // Replace with actual API URL
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true, // Ensures cookies are sent for authentication
});

// Add a request interceptor to automatically include the Authorization token
apiClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

const apiCall = {
    get: (path, params = {}, config = {}) =>
        apiClient.get(path, { ...config, params }),

    post: (path, data = {}, config = {}) =>
        apiClient.post(path, data, config),

    put: (path, data = {}, config = {}) =>
        apiClient.put(path, data, config),

    patch: (path, data = {}, config = {}) =>
        apiClient.patch(path, data, config),

    delete: (path, data = {}, config = {}) =>
        apiClient.delete(path, { ...config, data }),
};

export default apiCall;