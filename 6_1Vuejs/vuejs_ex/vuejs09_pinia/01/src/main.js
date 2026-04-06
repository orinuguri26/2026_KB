// main.js
// 이 파일은 Vue 애플리케이션의 시작점(entry point)입니다.
// 브라우저가 가장 먼저 실행하는 자바스크립트 파일이며,
// 여기서 App.vue를 루트 컴포넌트로 연결하고, router를 앱에 등록한 뒤,
// 최종적으로 index.html의 #app 요소에 화면을 마운트합니다.

// Vue 애플리케이션 인스턴스를 생성하기 위한 createApp 함수를 가져옵니다.
import { createApp } from 'vue';

// 전체 화면의 최상위(루트) 컴포넌트인 App.vue를 가져옵니다.
import App from './App.vue';

// 라우터 설정 파일을 가져옵니다.
// 일반적으로 src/router/index.js 파일이 default export 한 router 객체입니다.
import router from './router';

// App.vue를 기반으로 Vue 애플리케이션 객체를 생성합니다.
const app = createApp(App);

// 생성한 앱에 Vue Router 기능을 등록합니다.
// 이 코드를 실행해야 <RouterLink>, <RouterView>, URL 경로 이동 기능을 사용할 수 있습니다.
app.use(router);

// 최종적으로 public/index.html 또는 index.html 안의 id="app" 요소에 앱을 연결합니다.
// 이 시점부터 Vue가 해당 영역을 제어하며 화면을 렌더링합니다.
app.mount('#app');
