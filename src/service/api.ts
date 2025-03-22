import axios from 'axios';

// const api = axios.create({
//   baseURL: 'http://localhost:3333',
// });

const api = axios.create({
  baseURL: 'https://esf-api-hadassah.up.railway.app',
});

export default api;
