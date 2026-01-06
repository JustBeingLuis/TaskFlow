import axios from "axios";

const API_URL = "http://localhost:3000";

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor de respuestas para manejar errores 401
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token expirado o inválido
      localStorage.removeItem("token");
      window.location.href = "/";
    }
    return Promise.reject(error);
  }
);

const authService = {
  register: async (email, password) => {
    const response = await apiClient.post("/auth/register", {
      email,
      password,
    });
    return response.data;
  },

  login: async (email, password) => {
    const response = await apiClient.post("/auth/login", { email, password });
    if (response.data.token) {
      localStorage.setItem("token", response.data.token);
    }
    return response.data;
  },

  logout: () => {
    localStorage.removeItem("token");
  },
};

const taskService = {
  getTasks: async () => {
    const response = await apiClient.get("/tasks");
    return response.data;
  },

  createTasks: async (task) => {
    const response = await apiClient.post("/tasks", task);
    return response.data;
  },

  updateTasks: async (id, task) => {
    const response = await apiClient.put(`/tasks/${id}`, task);
    return response.data;
  },

  deleteTasks: async (id) => {
    const response = await apiClient.delete(`/tasks/${id}`);
    return response.data;
  },
};

const aiService = {
  parseTasks: async (text) => {
    const response = await apiClient.post("/ai/parse-tasks", { text });
    return response.data;
  },
};

const api = {
  ...authService,
  ...taskService,
  ...aiService,
};

export default api;
