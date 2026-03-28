<!-- 부모컴포넌트에서 사용자 정의이벤트의 사용여부와 상관없이 모든 컴포넌트는 
 $emit() 내장 메서드를 사용하여 부모컴포넌트로 이벤트를 발신할 수 있다.
 그런데 자식들의 무부별한 컴포넌트 발신을 제어하기 위해 발신 가능한
 이벤트를 명시하도록 했다. 
  -->
<script>
import UserProfile from './components/UserProfile.vue';
export default {
  components: { UserProfile },
  methods: {
    printHello() {
      alert('Hello');
    },
  },
};
</script>
<template>
  <UserProfile @print-hello="printHello" />
</template>
