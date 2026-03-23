import http from 'k6/http';

export const options = {
  vus: 100,
  duration: '10s',
}; //가상 유저 100명이 10초 동안 계속 요청을 보내는 설정

export default function () {
  http.get('http://localhost:8000');
}
