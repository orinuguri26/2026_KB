<!--
  [TodoHeader.vue 처리 단계 설명]

  1단계. 부모(App.vue)로부터 현재 탭 값(current)을 props로 전달받는다.
  2단계. defineEmits로 update-tab 이벤트를 선언한다.
  3단계. 사용자가 탭을 클릭하면 updateTab()이 실행된다.
  4단계. 클릭한 탭 값을 부모에게 전달하여 목록 필터 상태를 바꾸게 한다.
-->

<script setup>
// 부모 컴포넌트에서 전달받는 props를 선언한다.
const props = defineProps({
  current: {
    type: String,
    default: 'all', //기본값은 전체 보기 'all'
  },
});
// 부모로 전달할 수 있는 사용자 정의 이벤트를 선언한다.
const emit = defineEmits(['update-tab']);

// updateTab 함수는 클릭한 탭 값을 부모에게 전달한다.
const updateTab = (tab) => {
  emit('update-tab', tab);
};
</script>

<template>
  <header class="todo-header">
    <h1 class="todo-title">Todo List</h1>

    <p class="todo-description">
      Composition API + localStorage 저장 기능이 적용된 Todo 앱
    </p>

    <ul class="todo-tab">
      <li
        :class="{ 'todo-tab--active': props.current === 'all' }"
        @click="updateTab('all')"
      >
        전체
      </li>
      <li
        :class="{ 'todo-tab--active': props.current === 'completed' }"
        @click="updateTab('completed')"
      >
        완료
      </li>
    </ul>
  </header>
</template>
