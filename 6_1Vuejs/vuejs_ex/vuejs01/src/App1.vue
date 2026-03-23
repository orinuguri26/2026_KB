<script setup>
   //const message = "There !!!";
   //const message = {name : "seoyoomi", major: "computer" };
   //const page ="history";
   let loading = false;
</script>
<template>
<!--   <div v-bind id="page"> HISTORY PAGE-->
<!--  <div :id="page">HISTORY PAGE-->
<!--&lt;!&ndash;     <span>Hello</span>&ndash;&gt;-->
<!--&lt;!&ndash;     <span v-text="JSON.stringify(message)"></span>&ndash;&gt;-->

<!--   </div>-->
  <input type="text" placeholder="아이디" :readonly="loading"/>
  <input type="password" placeholder="비밀번호" :readonly="loading"/>
  <button :disabled="loading">로그인</button>



</template>

<style scoped>


</style>