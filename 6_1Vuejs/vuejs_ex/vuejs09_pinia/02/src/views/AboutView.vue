<script setup>
// AboutView.vue
// <script setup> 문법에서 Pinia store를 직접 사용하는 예제입니다.
// storeToRefs를 통해 state/getter를 반응성 손실 없이 구조 분해하여 템플릿에 연결합니다.

import { storeToRefs } from 'pinia'; // store의 state/getter를 ref로 안전하게 꺼내는 함수
import { useCountOptionStore } from '@/stores/countOption'; // Option Store
import { useCountSetupStore } from '@/stores/countSetup'; // Setup Store

const optionStore = useCountOptionStore(); // Option Store 인스턴스 생성
const setupStore = useCountSetupStore(); // Setup Store 인스턴스 생성

// state/getter를 구조 분해할 때는 storeToRefs를 사용해야 반응성이 유지됩니다.
const { num, doubleNum } = storeToRefs(optionStore);
const { num: setupNum, doubleNum: setupDoubleNum } = storeToRefs(setupStore);

// 액션은 ref가 아니므로 store 객체에서 직접 꺼내 쓰는 것이 일반적입니다.
const { increment, getJSON } = optionStore;
const { increment: setupIncrement, getJSON: setupGetJSON } = setupStore;

// 학습 확인용 콘솔 로그
console.log(optionStore.num); // Option Store state 읽기 예시
console.log(setupStore.doubleNum); // Setup Store getter 읽기 예시
</script>

<template>
  <!-- Option Store 값 출력 -->
  <h2>Option Store num: {{ num }}</h2>
  <h2>Option Store doubleNum: {{ doubleNum }}</h2>

  <!-- Setup Store 값 출력 -->
  <h2>Setup Store num: {{ setupNum }}</h2>
  <h2>Setup Store doubleNum: {{ setupDoubleNum }}</h2>

  <!-- Option Store 액션 버튼 -->
  <button @click="increment">Option increment</button>
  <button @click="getJSON('https://jsonplaceholder.typicode.com/posts')">
    Option getJSON
  </button>

  <!-- Setup Store 액션 버튼 -->
  <button @click="setupIncrement">Setup increment</button>
  <button @click="setupGetJSON('https://jsonplaceholder.typicode.com/posts')">
    Setup getJSON
  </button>
</template>
