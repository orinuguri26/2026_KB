<!-- 
  컴포넌트가 여러개로 자신의 기능을 수행하도록 구조화
  관리자  : App.vue 
  1. App컴포넌트는 methods옵션속성으로 addTodo() 함수 정의
     매개변수로 할일을 받는 기능 
  2. 입력받은 텍스트를 사용해서 할 일 목록을 구성할 객체데이터 생성 
     할일 목록 객체는 id(고유값), 사용자가 입력한 할일(msg) 
     할일 완료 여부(completed)     {id:1, msg:'운동하기',completed:false}
  3. 할일 목록 데이터를 관리하기 위한 자료구조 정의 todo : []   
  4. 할 일 목록 객체 데이터를 todo데이터에 추가하는 기능 . todo [] => push()
  5. methods 옵션 속성으로 정의한 addTodo() 함수
     v-on 디렉티브를 사용하여 TodoInput 컴포넌트에 전달하고
     전달한 이벤트는 TodoInput 컴포넌트에서 $emit()함수로 
     실행되게 한다.
---------------------------------------
   할일 목록 필터링
   1. 현재 목록 상태를 관리할 수 있는 데이터 정의 : current 
      '전체' 가 기본값이서 current 데이터의 초깃값은 'all' 정의
   2. current 데이터의 값에 따라 출력할 데이터를 변경하기 위해
      App.vue 에 computed 옵션 속성에서 할일 목록을 저장하는
      todo데이터가 배열이므로 배열의 표준 내장객체 메서드인 filter()
      사용하여 current값이 all 이면 필터링 하지 않고 그래도
      todo 데이터를 보여주고
      completed 라면 completed 속성의 값이 true인 것만 필터링해서 데이터를 보여준다.   

-->
<script>
import TodoHeader from '@/components/TodoHeader.vue';
import TodoList from '@/components/TodoList.vue';
import TodoInput from '@/components/TodoInput.vue';
export default {
  components: {
    TodoHeader,
    TodoList,
    TodoInput,
  },
  data() {
    return {
      todo: [],
      current: 'all',
    };
  },
  computed: {
    computedTodo() {
      if (this.current === 'all') {
        return this.todo;
      } else {
        return this.todo.filter((v) => v.completed);
      }
    },
  },
  methods: {
    addTodo(inputMsg) {
      const item = {
        id: Math.random(), // 고유한 값
        msg: inputMsg, // 할 일 텍스트
        completed: false, // 할 일 완료 여부
      };
      this.todo.push(item);
    },
    updateTab(tab) {
      this.current = tab;
    },
    deleteTodo(id) {
      this.todo = this.todo.filter((v) => v.id !== id);
    },
    updateTodo(id) {
      this.todo = this.todo.map((v) =>
        v.id === id ? { ...v, completed: !v.completed } : v,
      );
    },
  },
};
</script>
<template>
  <div class="todo">
    <TodoHeader :current @update-tab="updateTab" />
    <TodoList
      :computed-todo="computedTodo"
      @delete-todo="deleteTodo"
      @update-todo="updateTodo"
    />
    <TodoInput @add-todo="addTodo" />
  </div>
</template>
