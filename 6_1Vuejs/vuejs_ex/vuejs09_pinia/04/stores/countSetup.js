// stores/countSetup.js
// Pinia의 Setup Store 문법으로 작성한 예제입니다.
// Vue Composition API(ref, computed)를 직접 사용해 상태와 게터를 구성합니다.

import { defineStore } from 'pinia'; // Pinia 스토어 정의 함수
import { computed, ref } from 'vue'; // 반응형 값과 계산 값을 만들기 위한 Vue 함수

export const useCountSetupStore = defineStore('countSetup', () => {
  // state: ref로 기본 숫자 상태 생성
  const num = ref(10); // count 값
  const json = ref(null); // API 응답 데이터 저장용 상태

  // getters: computed로 파생 상태 생성
  const doubleNum = computed(() => num.value * 2); // num의 2배 값
  const doubleNumPlusOne = computed(() => doubleNum.value + 1); // doubleNum에 1을 더한 값

  // actions: 상태 변경 또는 비동기 처리 함수
  const increment = () => {
    num.value++; // ref 내부 값은 .value로 접근하여 변경
  };

  const getJSON = (url) => {
    increment(); // API 호출 전에 num 증가

    fetch(url) // 전달받은 URL로 데이터 요청
      .then((response) => response.json()) // 응답을 JSON으로 파싱
      .then((result) => {
        json.value = result; // ref 상태 json에 실제 응답 결과 저장
      })
      .catch((error) => {
        console.error('countSetup store getJSON error:', error); // 오류 발생 시 콘솔 출력
      });
  };

  // 외부 컴포넌트에서 사용할 상태, 게터, 액션 반환
  return {
    num,
    doubleNum,
    doubleNumPlusOne,
    json,
    increment,
    getJSON,
  };
});
