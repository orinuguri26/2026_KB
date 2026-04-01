# Todo 앱 - Composition API + localStorage

Vue 3 기반 TodoList Application 1.1 앱입니다.

## TodoList 1.0 => 1.1 리팩토링

- Options API → Composition API 변환
- `script setup` 문법 적용
- `localStorage` 자동 저장 / 복원 기능 추가
- 완료 개수 / 남은 일 개수 표시
- 완료 항목 전체 삭제 기능 추가

## 실행 방법

```bash
npm install
npm run dev
```

## 폴더 구조

```bash
todo-composition-localstorage/
├─ index.html
├─ package.json
├─ vite.config.js
├─ README.md
└─ src/
   ├─ App.vue
   ├─ main.js
   ├─ assets/
   │  └─ main.css
   └─ components/
      ├─ TodoHeader.vue
      ├─ TodoInput.vue
      └─ TodoList.vue
```

## 핵심 학습 포인트

### 1. `ref()`

단일 값과 배열을 반응형으로 관리합니다.

### 2. `computed()`

현재 탭 상태에 따라 화면에 출력할 목록을 계산합니다.

### 3. `watch()`

할 일 목록이 바뀔 때마다 `localStorage`에 자동 저장합니다.

### 4. `onMounted()`

앱 시작 시 저장된 데이터를 복원합니다.

## localStorage 저장 구조 예시

```json
[
  {
    "id": 1710000000000.123,
    "msg": "Vue Composition API 공부하기",
    "completed": false
  }
]
```
