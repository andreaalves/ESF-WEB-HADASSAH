import axios from 'axios';

const apiIntegrador = axios.create({
  baseURL: 'https://esf-api-hadassah-production.up.railway.app',
});
export default apiIntegrador;
