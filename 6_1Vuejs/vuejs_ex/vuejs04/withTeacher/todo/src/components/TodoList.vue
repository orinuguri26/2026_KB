<!-- 
    사용자가 입력한 할 일 목록의 데이터는 todo에 저장되어 있다.
    상태(전체, 완료)에 따라 필터링된 목록데이터는
    coumputed 옵션 속성에서 정의한 computedTodo 데이터에 저장된다.
    computedTodo 데이터를 TodoList 컴포넌트에 전달한다.
    전달받은 computedTodo 를 출력한다. 

-->
<script>
export default {
  data() {
    return {
      isEdit: '',
    };
  },
  props: {
    computedTodo: {
      type: Array,
      default() {
        return [];
      },
    },
  },

  methods: {
    deleteTodo(id) {
      this.$emit('delete-todo', id);
    },
    updateTodo(id) {
      this.$emit('update-todo', id);
    },
    editTodo(id) {
      this.isEdit = id;
    },
    endEdit() {
      this.isEdit = '';
    },
  },
};
</script>
<template>
  <div class="todo__list">
    <div
      v-for="item in computedTodo"
      :key="item.id"
      class="todo__item"
      :class="{ 'todo__item--completed': item.completed }"
    >
      <input
        type="checkbox"
        :id="`chk${item.id.toString()}`"
        :checked="item.completed"
        @click="updateTodo(item.id)"
      />
      <label
        :for="`chk${item.id.toString()}`"
        class="todo__checkbox-label"
      ></label>
      <span v-if="isEdit !== item.id" class="todo__item-text">
        {{ item.msg }}</span
      >
      <input
        v-else
        v-model="item.msg"
        type="text"
        class="todo__input-text"
        placeholder="내용 수정"
        @keydown.enter="endEdit"
      />
      <span
        class="material-symbols-outlined todo__edit-icon"
        @click="editTodo(item.id)"
        >edit</span
      >
      <span
        class="material-symbols-outlined todo__delete-icon"
        @click="deleteTodo(item.id)"
        >delete</span
      >
    </div>
    <div v-if="computedTodo.length === 0" class="todo__item--no">
      <p>할 일이 없습니다.</p>
    </div>
  </div>
</template>
