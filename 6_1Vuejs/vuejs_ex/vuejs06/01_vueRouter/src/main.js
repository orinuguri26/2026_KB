import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; //'./router/ router 폴더의 index.js 파일을 불러와라

const app = createApp(App);
app.use(router); //애플리케이션 인스턴스(app)에 내장된 use()를 사용하여 전달한 뷰 라우터 인스턴스를 사용한다.
app.mount('#app');
