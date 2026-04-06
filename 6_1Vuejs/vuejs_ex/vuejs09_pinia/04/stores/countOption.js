// stores/countOption.js
// Pinia의 Option Store 문법으로 작성한 예제입니다.
// state, getters, actions를 객체 형태로 나누어 정의합니다.

import { defineStore } from 'pinia'; // Pinia 스토어를 정의하는 함수

export const useCountOptionStore = defineStore('countOption', {
  // state: 컴포넌트 여러 곳에서 함께 사용하는 반응형 데이터
  state() {
    return {
      num: 10, // 기본 카운트 값
      json: null, // 외부 API 응답 데이터를 저장할 자리
    };
  },

  // getters: state를 가공해서 반환하는 계산 속성
  getters: {
    doubleNum(state) {
      return state.num * 2; // 현재 num 값을 2배로 계산
    },

    doubleNumPlusOne() {
      return this.doubleNum + 1; // 다른 getter를 this로 참조 가능
    },
  },

  // actions: state를 변경하거나 비동기 작업을 처리하는 함수
  actions: {
    increment() {
      this.num++; // this를 통해 state에 직접 접근하여 num 증가
    },

    getJSON(url) {
      this.increment(); // API 호출 전에 num을 1 증가시켜 동작 여부를 눈에 띄게 확인

      fetch(url) // 전달받은 URL로 HTTP 요청 전송
        .then((response) => response.json()) // 응답 본문을 JSON 형태로 변환
        .then((json) => {
          this.json = json; // 받아온 결과를 store의 json 상태에 저장
        })
        .catch((error) => {
          console.error('countOption store getJSON error:', error); // 네트워크 오류 추적용 로그
        });
    },
  },
});
