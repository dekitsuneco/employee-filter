import axios from 'axios';
import { ENDPOINTS, Endpoints, EndpointNames } from './endpoints';

const BASE_URL = 'https://5f7998dbe402340016f9321f.mockapi.io';

class ApiService {
  baseURL: string;

  endpoints: Endpoints;

  constructor(baseURL: string, endpoints: Endpoints) {
    this.baseURL = baseURL;
    this.endpoints = endpoints;
  }

  async generateRequest(endpoint: EndpointNames, data: Object = {}) {
    const { method, uri } = this.endpoints[endpoint];

    console.log(`${this.baseURL}${uri}`);
    console.log(method);

    return axios({
      method,
      url: `${this.baseURL}${uri}`,
      data,
    });
  }

  async fetch(endpoint: EndpointNames, data: Object = {}) {
    const response = await this.generateRequest(endpoint, data);

    return response.data;
  }
}

const apiService = new ApiService(BASE_URL, ENDPOINTS);

export { apiService };
