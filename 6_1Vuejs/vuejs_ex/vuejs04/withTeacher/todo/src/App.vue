<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoList from './components/TodoList.vue';
import TodoInput from './components/TodoInput.vue';

export default {
  components: {
    TodoHeader,
    TodoList,
    TodoInput,
  },
};
</script>

<template>
  <div class="todo">
    <TodoHeader />
    <TodoList />
    <TodoInput />
  </div>
</template>
