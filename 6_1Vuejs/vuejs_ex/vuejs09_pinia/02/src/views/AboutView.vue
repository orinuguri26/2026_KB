<script setup>
import { useCountSetupStore } from '@/stores/countSetup';
import { storeToRefs } from 'pinia'; //비구조화 할당시 반응형 유지하기 위해 필요

const setupStore = useCountSetupStore(); //셋업 스토어 객체 인스턴스 생성
const { num, doubleNum } = storeToRefs(setupStore);
console.log(num, doubleNum);
</script>
<template>
  <h1>About View</h1>
</template>
