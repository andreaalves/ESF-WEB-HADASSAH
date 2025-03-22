import axios from 'axios';

const apiIntegrador = axios.create({
  baseURL: 'https://esf-api-hadassah.up.railway.app',
});
export default apiIntegrador;
