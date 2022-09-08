import http from 'k6/http';
import { check } from 'k6';
export default function () {
  const res = http.get('http://xxx.xxx.xxx.xxx/productpage');
   check(res, {
     'response code was 200': (res) => res.status == 200,
     'response code was 503': (res) => res.status == 503,
  });
}