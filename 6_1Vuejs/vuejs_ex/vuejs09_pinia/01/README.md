# Vue 부모-자식 컴포넌트 이벤트/Props 예제

## 1. 프로젝트 개요

**Vue 3 Composition API** 기반의 아주 기본적인 부모-자식 컴포넌트 통신 예제입니다.

구성 목적은 다음 2가지를 이해하는 것입니다.

1. **부모 → 자식으로 데이터 전달**: `props`
2. **자식 → 부모로 이벤트 전달**: `emit`

즉, 이 예제는 화면에 숫자 상태를 보여주고, 자식 컴포넌트의 버튼을 눌렀을 때 부모가 그 숫자를 증가시키는 구조입니다.

---

## 2. 파일 구조

```bash
src/
├─ main.js
├─ App.vue
└─ components/
   └─ ChildComp.vue
```

> 업로드된 파일 기준으로는 `App.vue`, `ChildComp.vue`, `main.js` 가 제공되었습니다.

---

## 3. 전체 실행 흐름

프로젝트의 실행 흐름은 아래와 같습니다.

### 3-1. `main.js`

- Vue 앱을 시작하는 **진입점(entry point)** 입니다.
- `App.vue`를 불러와서 실제 HTML의 `#app` 요소에 연결합니다.

### 3-2. `App.vue`

- 부모 컴포넌트입니다.
- `num`이라는 반응형 상태를 가지고 있습니다.
- `ChildComp`에 `num` 값을 내려보냅니다.
- 자식이 `update` 이벤트를 보내면 `update()` 함수를 실행하여 `num` 값을 증가시킵니다.

### 3-3. `ChildComp.vue`

- 자식 컴포넌트입니다.
- 부모에게서 `num` 값을 prop으로 받습니다.
- 버튼 클릭 시 `update` 이벤트를 부모에게 전달합니다.
- 자식은 직접 `num`을 수정하지 않고, **이벤트만 전달**합니다.

---

## 4. 파일 간 연결성 분석

## 4-1. `main.js` ↔ `App.vue`

`main.js`는 `App.vue`를 import 하여 Vue 앱의 루트 컴포넌트로 사용합니다.

연결 관계:

- `main.js`가 앱 시작
- `App.vue`가 첫 화면의 중심 컴포넌트

즉:

```js
main.js → App.vue
```

---

## 4-2. `App.vue` ↔ `ChildComp.vue`

`App.vue`는 `ChildComp.vue`를 import 해서 템플릿에서 사용합니다.

연결 관계:

- 부모가 자식을 불러옴
- 부모가 자식에게 `num` 전달
- 자식이 부모에게 `update` 이벤트 전달

즉:

```text
App.vue --(props:num)--> ChildComp.vue
App.vue <--(emit:update)-- ChildComp.vue
```

---

## 5. 데이터 흐름 분석

**단방향 데이터 흐름**입니다.

### 부모에서 자식으로

- `App.vue`의 `num` 상태가
- `ChildComp.vue`의 `props.num`으로 전달됩니다.

```vue
<ChildComp :num="num" />
```

### 자식에서 부모로

- `ChildComp.vue`에서 버튼 클릭
- `emits("update")` 실행
- 부모의 `@update="update"`가 동작
- 부모의 `num.value++` 실행

```vue
<button @click="emits('update')">상태 업데이트</button>
```

즉 흐름은 다음과 같습니다.

```text
1. 부모가 num을 자식에게 전달
2. 자식이 num을 화면에 출력
3. 자식 버튼 클릭
4. 자식이 update 이벤트 emit
5. 부모가 update 함수 실행
6. 부모의 num 증가
7. 증가된 값이 다시 자식으로 전달
8. 화면 자동 갱신
```

---

## 6. 왜 이렇게 설계하는가

Vue에서는 **props는 읽기 전용(read-only)** 으로 다루는 것이 원칙입니다.

따라서 자식 컴포넌트에서 부모의 상태를 직접 수정하지 않고:

- 자식은 “수정 요청”만 이벤트로 보냄
- 실제 상태 변경은 부모가 수행

이 방식의 장점은 다음과 같습니다.

1. **역할 분리가 명확함**
   - 부모: 상태 관리
   - 자식: UI 표시 + 사용자 입력 전달

2. **유지보수가 쉬움**
   - 상태 변경 위치가 명확해서 디버깅이 편함

3. **Vue의 권장 패턴과 일치**
   - 단방향 데이터 흐름 유지

---

## 7. 각 파일 역할 요약

### `main.js`

- 프로젝트 시작 파일
- Vue 앱 생성
- `App.vue`를 `#app`에 마운트

### `App.vue`

- 부모 컴포넌트
- 상태(`num`) 보관
- 자식에게 데이터 전달
- 자식 이벤트를 받아 상태 변경

### `ChildComp.vue`

- 자식 컴포넌트
- 부모의 값 표시
- 버튼 클릭 시 이벤트 발생
- 상태는 직접 수정하지 않음

---

## 8. 학습 포인트

### 8-1. `ref`

반응형 데이터를 만들기 위한 함수입니다.

```js
const num = ref(0);
```

- `num`은 ref 객체
- 실제 값은 `num.value`
- 값이 바뀌면 화면도 자동 갱신

---

### 8-2. `defineProps`

부모로부터 전달받는 데이터를 정의합니다.

```js
const props = defineProps({
  num: Number,
});
```

- 자식이 받을 prop의 이름과 타입을 정의

---

### 8-3. `defineEmits`

자식이 부모에게 보낼 이벤트를 정의합니다.

```js
const emits = defineEmits(['update']);
```

- `update`라는 사용자 정의 이벤트를 허용

---

### 8-4. 이벤트 바인딩

부모는 자식의 이벤트를 다음과 같이 받습니다.

```vue
<ChildComp :num="num" @update="update" />
```

- `@update`는 자식이 emit한 이벤트를 감지
- 감지 후 부모의 `update` 함수 실행

---

## 9. 구조 다이어그램

```text
[main.js]
   │
   ▼
[App.vue]
   │  num 전달 (props)
   ▼
[ChildComp.vue]
   │
   │ update 이벤트 전달 (emit)
   └───────────────────────▲
```

좀 더 자세히 보면:

```text
main.js
 └─ createApp(App).mount("#app")
      └─ App.vue
          ├─ ref 상태 num 생성
          ├─ ChildComp import
          ├─ :num="num" 으로 자식에게 전달
          └─ @update="update" 로 자식 이벤트 수신
               └─ num.value++ 실행

ChildComp.vue
 ├─ defineProps로 num 받음
 ├─ defineEmits로 update 선언
 ├─ props.num 화면 출력
 └─ 버튼 클릭 시 emits("update") 실행
```
