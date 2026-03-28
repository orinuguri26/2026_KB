// 전역 스타일 파일을 먼저 불러온다.
import './assets/main.css';

// Vue 앱을 생성하기 위한 createApp 함수를 가져온다.
import { createApp } from 'vue';

// 루트 컴포넌트인 App.vue를 가져온다.
import App from './App.vue';

// App 컴포넌트를 기반으로 Vue 애플리케이션 인스턴스를 만든다.
const app = createApp(App);

// index.html의 #app 요소에 Vue 앱을 연결한다.
app.mount('#app');
