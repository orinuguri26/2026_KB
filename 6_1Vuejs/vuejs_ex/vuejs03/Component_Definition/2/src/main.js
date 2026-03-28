import { createApp } from 'vue';
import App from './App.vue';
import FirstChild from './components/FirstChild.vue';
import SecondChild from './components/SecondChild.vue';

const app = createApp(App);
app.component('FirstChild', FirstChild).component('SecnodChild', SecondChild);
app.mount('#app');
