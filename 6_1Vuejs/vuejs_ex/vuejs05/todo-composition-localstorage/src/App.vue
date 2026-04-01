<!--
  [App.vue 처리 단계 설명]

  1단계. TodoHeader, TodoList, TodoInput 컴포넌트를 import 한다.
  2단계. 할 일 목록(todo)과 현재 필터 탭(current)을 ref로 반응형 상태로 만든다.
  3단계. 앱이 처음 열릴 때 localStorage에 저장된 todo 데이터를 읽어와 복원한다.
  4단계. computed를 사용해 현재 탭에 맞는 화면 출력용 목록(filteredTodo)을 계산한다.
  5단계. addTodo(), deleteTodo(), toggleTodo(), clearCompleted(), updateTab() 함수를 만든다.
  6단계. watch를 사용해 todo 목록이 바뀔 때마다 localStorage에 자동 저장한다.
  7단계. props와 emit으로 자식 컴포넌트와 연결해 전체 Todo 앱이 동작하도록 구성한다.
-->

<script setup>
// Vue의 반응형 상태(ref), 계산된 상태(computed), 상태 감시(watch), 최초 실행 시점(onMounted)을 가져온다.
import { ref, onMounted, watch, computed } from 'vue';

// 상단 제목/탭 컴포넌트를 가져온다. TodoHeader
import TodoHeader from './components/TodoHeader.vue';
// 목록 출력 컴포넌트를 가져온다. TodoList
import TodoList from './components/TodoList.vue';
// 입력창 컴포넌트를 가져온다.TodoInput
import TodoInput from './components/TodoInput.vue';

// localStorage에 사용할 키 이름을 상수로 정의한다.
const STORAGE_KEY = 'todo-app-composition-api';

// todo는 전체 할 일 목록을 저장하는 반응형 배열이다.
const todo = ref([]);

// current는 현재 선택된 탭 상태를 저장한다.
// all = 전체 보기, completed = 완료만 보기
const current = ref('all');

// filteredTodo는 current 값에 따라 실제 화면에 보여줄 목록을 계산한다.
const filteredTodo = computed(() => {
  if (current.value === 'all') {
    return todo.value;
  }
  return todo.value.filter((item) => item.completed);
});

// completedCount는 완료된 할 일 개수를 계산한다.
const completedCount = computed(() => {
  return todo.value.filter((item) => item.completed).length;
});

// remainingCount는 아직 완료되지 않은 할 일 개수를 계산한다.
const remainingCount = computed(() => {
  return todo.value.filter((item) => !item.completed).length;
});

// addTodo는 입력받은 문자열을 새 할 일 객체로 만들어 목록에 추가한다. 입력값의 유효성 검사
const addTodo = (inputMsg) => {
  // 공백만 입력한 경우에는 추가하지 않고 함수를 종료한다.
  const trimmedMsg = inputMsg.trim(); //" hello" -> "hello"   " " -> ""  Guard Clause 방어코드
  // 공백만 입력한 경우에는 추가하지 않고 함수를 종료한다.
  if (!trimmedMsg) return;
  // 새 할 일 객체를 생성한다.
  const item = {
    id: Date.now() + Math.random(),
    msg: trimmedMsg,
    completed: false,
  };
  //새롭게 입력된 할일은 배열에 맨앞에 추가
  todo.value.unshift(item);
};

// updateTab은 상단 탭에서 전달받은 값을 current에 저장한다.
const updateTab = (tab) => {
  current.value = tab;
};

// deleteTodo는 전달받은 id와 일치하지 않는 항목만 남겨 삭제를 처리한다.
const deleteTodo = (id) => {
  todo.value = todo.value.filter((item) => item.id !== id);
};

// toggleTodo는 전달받은 id와 일치하는 항목의 completed 값을 true/false로 뒤집는다.
const toogleTodo = (id) => {
  todo.value = todo.value.map(
    //현재 순회 중인 항목이 클릭한 항목이면 completed 값을 반전시킨 새 객체를 반환
    (item) => {
      if (item.id === id) {
        return {
          ...item,
          completed: !item.completed,
        };
      }
      return item; //클릭한 항목이 아니라면 기존 항목을 그대로 반환한다.
    },
  );
};
// clearCompleted는 완료된 항목을 한 번에 제거한다.

// loadTodos는 localStorage에서 저장된 목록을 읽어 todo 상태에 복원한다.

// 컴포넌트가 화면에 마운트되면 저장된 할 일 목록을 먼저 불러온다.

// todo 값이 바뀔 때마다 localStorage에 최신 상태를 문자열로 저장한다.
</script>
<template>
  <div class="todo-app">
    <!-- 상단 제목과 탭 UI를 출력한다. -->
    <TodoHeader :current="current" @update-tab="updateTab" />

    <!-- 입력창과 등록 버튼 UI를 출력한다. -->
    <TodoInput />

    <!-- 할 일 통계 정보를 간단히 보여준다. -->
    <div class="todo-summary">
      <p>전체 {{}}개</p>
      <p>완료 {{}}개</p>
      <p>남은 일 {{}} 개</p>
    </div>

    <!-- 현재 탭에 맞는 목록을 출력한다. -->
    <TodoList :items="filteredTodo" />

    <!-- 완료된 항목이 1개 이상 있을 때만 일괄 삭제 버튼을 보여준다. -->
    <div>
      0" class="todo-actions">
      <button class="todo-clear-btn">완료 항목 전체 삭제</button>
    </div>
  </div>
</template>
