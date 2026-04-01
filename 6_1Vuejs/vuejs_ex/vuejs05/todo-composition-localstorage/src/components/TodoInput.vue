<!--
  [TodoInput.vue 처리 단계 설명]

  1단계. 입력창 데이터 inputMsg를 ref로 만든다.
  2단계. input 태그와 v-model로 양방향 바인딩한다.
  3단계. Enter 키 또는 등록 버튼 클릭 시 addTodo()를 실행한다.
  4단계. addTodo()는 현재 입력값을 부모(App.vue)로 emit 한다.
  5단계. 전송이 끝나면 입력창을 빈 문자열로 초기화한다.
-->

<script setup>
// Vue의 ref를 가져온다.
import { ref } from 'vue';

// 부모로 보낼 이벤트를 선언한다.
const emit = defineEmits(['add-todo']);

// inputMsg는 사용자가 입력하는 텍스트를 저장하는 반응형 변수이다.
const inputMsg = ref('');

// addTodo는 현재 입력값을 부모에게 전달하고 입력창을 초기화한다.
const addTodo = () => {
  const trimmedMsg = inputMsg.value.trim();
  if (!trimmedMsg) return;

  //add-todo 이벤트로 정리된 입력값을 부모에게 전달한다.
  emit('add-todo', trimmedMsg);

  //입력값이 전달이 완료되었으므로 입력창을 비운다.
  inputMsg.value = '';
};
</script>

<template>
  <div class="todo-input-wrap">
    <input
      v-model="inputMsg"
      type="text"
      class="todo-input"
      placeholder="할 일을 입력하세요."
      @keydown.enter="addTodo"
    />

    <button class="todo-add-btn" @click="addTodo">등록</button>
  </div>
</template>
