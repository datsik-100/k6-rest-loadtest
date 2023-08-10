import http from 'k6/http';
import { sleep } from 'k6';
import configs from '../config/index.js'

const endpoint = configs.targetEndpoint

export const options = {
  vus: 100,
  duration: '1s',
}

export default function () {
  http.get(endpoint);
  sleep(1);
}