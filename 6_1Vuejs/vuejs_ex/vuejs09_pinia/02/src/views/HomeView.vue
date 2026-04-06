<script>
// HomeView.vue
// Option API 방식 컴포넌트에서 Pinia store를 mapState, mapActions로 연결하는 예제입니다.
// 하나는 Option Store, 다른 하나는 Setup Store를 가져와 비교 학습할 수 있게 구성했습니다.

import { mapState, mapActions } from 'pinia'; // store의 state/getter/action을 현재 컴포넌트에 매핑하는 헬퍼
import { useCountOptionStore } from '@/stores/countOption'; // Option Store 가져오기
import { useCountSetupStore } from '@/stores/countSetup'; // Setup Store 가져오기

export default {
  computed: {
    // useCountOptionStore의 state/getter를 현재 컴포넌트 computed에 연결
    // 결과적으로 this.num, this.doubleNum으로 접근 가능
    ...mapState(useCountOptionStore, ['num', 'doubleNum']),

    // useCountSetupStore의 항목을 원하는 이름으로 별칭(alias) 매핑
    // 결과적으로 this.myNum, this.myDouble로 접근 가능
    ...mapState(useCountSetupStore, {
      myNum: 'num',
      myDouble: 'doubleNum',
    }),
  },

  methods: {
    // Option Store의 액션을 현재 컴포넌트 메서드로 연결
    // 결과적으로 this.increment(), this.getJSON() 사용 가능
    ...mapActions(useCountOptionStore, ['increment', 'getJSON']),

    // Setup Store의 액션을 별칭 이름으로 연결
    // 결과적으로 this.myIncre(), this.myJSON() 사용 가능
    ...mapActions(useCountSetupStore, {
      myIncre: 'increment',
      myJSON: 'getJSON',
    }),
  },
};
</script>

<template>
  <!-- Option Store에서 가져온 값 출력 -->
  <h2>Option Store num: {{ num }}</h2>
  <h2>Option Store doubleNum: {{ doubleNum }}</h2>

  <!-- Setup Store에서 가져온 값도 함께 출력하여 비교 학습 가능 -->
  <h2>Setup Store myNum: {{ myNum }}</h2>
  <h2>Setup Store myDouble: {{ myDouble }}</h2>

  <!-- Option Store의 increment 액션 호출 -->
  <button @click="increment">Option increment</button>

  <!-- Option Store의 getJSON 액션 호출 -->
  <button @click="getJSON('https://jsonplaceholder.typicode.com/posts')">
    Option getJSON
  </button>

  <!-- Setup Store의 increment 액션 호출 -->
  <button @click="myIncre">Setup increment</button>

  <!-- Setup Store의 getJSON 액션 호출 -->
  <button @click="myJSON('https://jsonplaceholder.typicode.com/posts')">
    Setup getJSON
  </button>
</template>
