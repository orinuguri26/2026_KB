<!-- 컴포넌트 지역(local)등록: 컴포넌트를 등록한 곳에서만 사용
     Options API => components 속성  
-->
<script>
import FirstChild from './components/FirstChild.vue';
export default {
  components: {
    FirstChild, //App 컴포넌트에서만 FirstChild 컴포넌트를 사용한다.
  },
};
</script>
<template>
  <h1>나는 AppVue야</h1>
  <FirstChild />
</template>
<style scoped>
h1,
p {
  color: orange !important;
}
</style>
