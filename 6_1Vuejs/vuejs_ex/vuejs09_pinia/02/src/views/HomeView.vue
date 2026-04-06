<script>
import { mapState } from 'pinia';
import { useCountSetupStore } from '@/stores/countSetup';

const setupStore = useCountSetupStore();
console.log(setupStore.doubleNum);
console.log(setupStore.num);
console.log(setupStore.increment());
setupStore.getJson('https://jsonplaceholder.typicode.com/posts');
console.log(num, doubleNum);
</script>

<template>
  <h2>num: {{ num }}</h2>

  <h2>doubleNum: {{ doubleNum }}</h2>
  <!-- 또는  {{ myDouble }}-->
  <button @click="increment">increment</button>
  <button @click="getJSON('https://jsonplaceholder.typicode.com/posts')">
    getJSON
  </button>
</template>
