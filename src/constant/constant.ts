
import axios from 'axios';

export const API_OPTIONS = {
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYzUyMzhkN2YxMDI5YzM3OTQxNjQ1NTM0ZWM2OGRhMSIsIm5iZiI6MTczMTMzNTk0Ni4xOTY4NDcyLCJzdWIiOiI2NWM4ZTcxMGI2Y2ZmMTAxNGJhNDdlNjMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.H236u4ARg3xkH9tMrCUyX-lX6GEhq-orb4W20A5Lubk',
        'Content-Type': 'application/json',
    },
};

// Create an Axios instance with the config options
export const apiClient = axios.create(API_OPTIONS);
