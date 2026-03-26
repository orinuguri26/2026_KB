<template>
  <div class="todo__list">
    <!-- 할 일 목록이 있을 때 (완료 시 .todo__item--completed 클래스 추가 )-->
    <div class="todo__item">
      <input type="checkbox" id="chk" />
      <label for="chk" class="todo__checkbox-label"></label>
      <span class="todo__item-text">아침먹기</span>
      <span class="material-symbols-outlined todo__delete-icon"> delete </span>
    </div>
    <!-- 할 일 목록이 없을 때 -->
    <div class="todo__item--no" style="display: none">
      <p>할일 목록이 없습니다.</p>
    </div>
  </div>
</template>
