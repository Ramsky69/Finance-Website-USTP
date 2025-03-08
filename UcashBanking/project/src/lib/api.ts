import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api',  // ✅ Correct backend URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to add the auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const auth = {
  register: async (userData: { username: string; email: string; password: string }) => {
    try {
      const response = await api.post('/auth/register/', userData);  // ✅ Added trailing slash
      const { token, user } = response.data;
      localStorage.setItem('token', token);
      return { token, user };
    } catch (error: any) {
      console.error("Registration Error:", error.response?.data || error.message);  // ✅ Improved error handling
      throw error;
    }
  },

  login: async (email: string, password: string) => {
    try {
      const response = await api.post('/auth/login/', { email, password });  // ✅ Added trailing slash
      const { token, user } = response.data;
      localStorage.setItem('token', token);
      return { token, user };
    } catch (error: any) {
      console.error("Login Error:", error.response?.data || error.message);
      throw error;
    }
  },

  logout: () => {
    localStorage.removeItem('token');
  },
};

export const transactions = {
  getAll: () => api.get('/transactions/'),
  create: (data: any) => api.post('/transactions/', data),
  update: (id: string, data: any) => api.put(`/transactions/${id}/`, data),
  delete: (id: string) => api.delete(`/transactions/${id}/`),
  getSummary: () => api.get('/transactions/summary/'),
};

export const budgets = {
  getAll: () => api.get('/budgets/'),
  create: (data: any) => api.post('/budgets/', data),
  update: (id: string, data: any) => api.put(`/budgets/${id}/`, data),
  delete: (id: string) => api.delete(`/budgets/${id}/`),
};

export const accounts = {
  getAll: () => api.get('/accounts/'),
  create: (data: any) => api.post('/accounts/', data),
  update: (id: string, data: any) => api.put(`/accounts/${id}/`, data),
  delete: (id: string) => api.delete(`/accounts/${id}/`),
};
