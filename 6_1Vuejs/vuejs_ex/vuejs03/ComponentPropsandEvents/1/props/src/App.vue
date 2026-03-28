<!-- @print-hello 이벤트를 발신할때 문자열값인 '영희' 숫자형값인 15 를 매개변수로 하는 코드를 작성하세요 -->
<script>
import UserProfile from './components/UserProfile.vue';

export default {
  components: {
    UserProfile,
  },
  methods: {
    printHello(name, age) {
      alert(`안녕하세요 저는 ${name}이고 나이는 ${age}`);
    },
  },
};
</script>
<template>
  <UserProfile
    @print-hello="
      (name, age) => {
        printHello(name, age);
      }
    "
  />
</template>
