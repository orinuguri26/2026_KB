<!-- 
    컴포넌트에 속성과 이벤트 정의 방법 
    컴포넌트에 속성정의 => 사용자 정의 속성 
    컴포넌트에 이벤트정의 => 사용자 정의 이벤트 
    사용자 정의 속성을 이용하여 해당 컴포넌트에 원하는 값을 전달 할 수 있다.  
    UserProfile 컴포넌트의 name 속성과 age 속성을 정의하고
    UserProfile 컴포넌트로 사용자 정의 속성(name,age) 의 값 전달 
-->
<script>
import UserProfile from './components/UserProfile.vue';
export default {
  components: {
    UserProfile,
  },
  data() {
    return {
      name: '김철수',
      age: 30,
    };
  },
};
</script>
<template>
  <!-- 사용자 정의속성값 name, age UserProfile에게 전달  -->
  <UserProfile :name="name" :age="age" />
</template>
