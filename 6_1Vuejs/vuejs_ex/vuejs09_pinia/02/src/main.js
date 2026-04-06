// main.js
// 애플리케이션의 시작점(entry point)입니다.
// 여기서 Vue 앱을 생성하고, 라우터와 Pinia를 앱 전체에 연결한 뒤 화면에 마운트합니다.

import { createApp } from 'vue'; // Vue 애플리케이션 인스턴스를 생성하는 함수
import { createPinia } from 'pinia'; // 전역 상태 관리 라이브러리 Pinia 인스턴스를 만드는 함수
import App from './App.vue'; // 최상위 루트 컴포넌트
import router from './router'; // src/router/index.js에서 export한 라우터 객체

const app = createApp(App); // App.vue를 루트로 하는 Vue 앱 생성
const pinia = createPinia(); // Pinia 저장소 인스턴스 생성

app.use(router); // 라우터 기능을 앱에 등록하여 페이지 이동 기능 사용 가능
app.use(pinia); // Pinia를 앱에 등록하여 모든 컴포넌트에서 store 사용 가능
app.mount('#app'); // public/index.html의 #app 요소에 Vue 앱을 실제로 렌더링
