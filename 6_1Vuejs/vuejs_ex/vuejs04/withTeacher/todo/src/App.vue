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
      전체 가 기본값이서서 current 데이터의 초깃값은 'all' 정의

-->
<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoList from './components/TodoList.vue';
import TodoInput from './components/TodoInput.vue';

export default {
  data() {
    return {
      //할일 목록을 관리하기 위해서 todo데이터 정의
      // 데이터가 여러개 일 수 있기에 배열로 정의함
      todo: [],
      current: 'all',
    };
  },
  components: {
    TodoHeader,
    TodoList,
    TodoInput,
  },
  methods: {
    addTodo(inputMsg) {
      const item = {
        id: Math.random(), //고유값 할당
        msg: inputMsg, // 할 일 텍스트
        completed: false, //할일 완료 여부 체크
      };
      this.todo.push(item);
    },

    updateTab(tab) {
      this.current = tab;
    },
  },
};
</script>

<template>
  <div class="todo">
    <!-- current데이터를 TodoHeader 전달 -->
    <TodoHeader :current @update-tab="updateTab" />
    <TodoList />
    <TodoInput @add-todo="addTodo" />
  </div>
</template>
