<!--
  [TodoList.vue 처리 단계 설명]

  1단계. 부모(App.vue)로부터 화면에 보여줄 목록(items)을 props로 전달받는다.
  2단계. v-for로 목록을 반복 출력한다.
  3단계. 체크박스 변경 시 toggleTodo()가 실행되어 부모에게 toggle-todo 이벤트를 전달한다.
  4단계. 삭제 버튼 클릭 시 deleteTodo()가 실행되어 부모에게 delete-todo 이벤트를 전달한다.
  5단계. 완료된 항목에는 완료 스타일 클래스를 적용한다.
  6단계. 출력할 목록이 없으면 비어 있음 메시지를 출력한다.
-->

<script setup>
// 부모로부터 전달받는 목록 데이터를 선언한다.
const props = defineProps({
  items: {
    type: Array,
    default: () => [],
  },
});
// 부모에게 보낼 이벤트를 선언한다.
const emit = defineEmits(['delete-todo', 'toggle-todo']);
// deleteTodo는 삭제할 항목의 id를 부모에게 전달한다.
const deleteTodo = (id) => {
  emit('delete-todo', id);
};
// toggleTodo는 완료 상태를 바꿀 항목의 id를 부모에게 전달한다.
const toggleTodo = (id) => {
  emit('toggle-todo', id);
};
</script>

<template>
  <section class="todo-list">
    <div class="todo-empty" v-if="props.items.length === 0">
      <p>할 일이 없습니다.</p>
    </div>

    <div
      class="todo-item"
      v-for="item in props.items"
      :key="item.id"
      :class="{ 'todo-item--completed': item.completed }"
    >
      <label class="todo-item-check-wrap">
        <input
          type="checkbox"
          :checked="item.completed"
          @change="toggleTodo(item.id)"
        />
        <span>완료</span>
      </label>

      <span class="todo-item-text">{{ item.msg }}</span>

      <button class="todo-delete-btn" @click="deleteTodo(item.id)">삭제</button>
    </div>
  </section>
</template>
