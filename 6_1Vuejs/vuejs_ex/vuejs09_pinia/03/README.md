# Vue + Pinia 학습용 프로젝트 분석본

1. **Pinia Option Store 문법**
2. **Pinia Setup Store 문법**
3. **컴포넌트에서 Store를 연결하는 두 가지 방식**
   - `mapState`, `mapActions`를 사용하는 방식
   - `script setup` + `storeToRefs`를 사용하는 방식

---

## 1. 프로젝트 구조

```bash
03/
├─ README.md
└─ src/
   ├─ App.vue
   ├─ main.js
   ├─ router/
   │  └─ index.js
   ├─ stores/
   │  ├─ countOption.js
   │  └─ countSetup.js
   └─ views/
      ├─ HomeView.vue
      └─ AboutView.vue
```

---

## 2. 파일별 역할 분석

### 2-1. `src/main.js`

- Vue 앱의 시작점입니다.
- `createApp(App)`으로 루트 앱을 만듭니다.
- `createPinia()`로 전역 상태 저장소를 생성합니다.
- `router`와 `pinia`를 앱에 등록합니다.
- 마지막으로 `#app` 요소에 실제 화면을 렌더링합니다.

### 2-2. `src/App.vue`

- 최상위 루트 컴포넌트입니다.
- `RouterLink`로 페이지 이동 메뉴를 만듭니다.
- `RouterView` 위치에 현재 경로에 맞는 화면이 출력됩니다.

### 2-3. `src/router/index.js`

- URL과 화면 컴포넌트를 연결하는 파일입니다.
- `/`는 `HomeView.vue`, `/about`는 `AboutView.vue`와 연결됩니다.
- About은 **지연 로딩(lazy loading)** 으로 작성되어 초기 로딩 성능에 유리합니다.

### 2-4. `src/stores/countOption.js`

- **Option Store 방식**의 Pinia 예제입니다.
- `state`, `getters`, `actions`를 객체 속성으로 나누어 작성합니다.
- Vuex와 구조가 비슷하여 처음 배울 때 비교적 익숙하게 느껴질 수 있습니다.

핵심 포인트:

- `state()`는 공유 상태를 반환합니다.
- `doubleNum`은 `num * 2`를 계산합니다.
- `doubleNumPlusOne`은 다른 getter를 다시 활용합니다.
- `increment()`는 상태를 변경합니다.
- `getJSON()`은 비동기 요청 후 결과를 상태에 저장합니다.

### 2-5. `src/stores/countSetup.js`

- **Setup Store 방식**의 Pinia 예제입니다.
- Composition API처럼 `ref`, `computed`, 함수로 직접 구성합니다.
- 유연성이 높고, Vue 3 스타일과 잘 어울립니다.

핵심 포인트:

- `num`, `json`은 `ref`로 생성합니다.
- `doubleNum`, `doubleNumPlusOne`은 `computed`로 만듭니다.
- `increment()`와 `getJSON()`은 일반 함수처럼 작성합니다.
- 마지막에 `return`한 항목만 외부에서 사용할 수 있습니다.

### 2-6. `src/views/HomeView.vue`

- **Option API 컴포넌트**에서 Pinia를 연결하는 예제입니다.
- `mapState`, `mapActions`를 사용합니다.
- Option Store와 Setup Store를 동시에 가져와 비교할 수 있게 만들었습니다.

핵심 포인트:

- `...mapState()`로 store의 state/getter를 computed에 연결합니다.
- `...mapActions()`로 store의 action을 methods에 연결합니다.
- 별칭(alias)을 주면 `myNum`, `myDouble`처럼 다른 이름으로도 쓸 수 있습니다.

### 2-7. `src/views/AboutView.vue`

- **`<script setup>` 방식**에서 Pinia를 직접 사용하는 예제입니다.
- `storeToRefs()`를 이용해 반응성을 유지하며 state/getter를 꺼냅니다.
- action은 store 객체에서 직접 사용합니다.

핵심 포인트:

- `storeToRefs()` 없이 구조 분해하면 반응성이 깨질 수 있습니다.
- action은 ref가 아니므로 그냥 `const { increment } = store`처럼 사용합니다.
- 템플릿에서는 바로 `increment`, `getJSON`을 연결할 수 있습니다.

---

## 3. 전체 동작 흐름

### 앱 시작 흐름

1. `main.js`에서 Vue 앱 생성
2. Pinia 생성 후 등록
3. Router 등록
4. `App.vue` 렌더링
5. `RouterView`에 현재 경로에 맞는 화면 표시

### 상태 관리 흐름

1. 컴포넌트가 Pinia store를 import
2. state/getter/action을 연결
3. 버튼 클릭 시 action 실행
4. action이 state를 변경
5. 변경된 state를 사용하는 화면이 자동 갱신

### API 요청 흐름

1. 버튼 클릭
2. `getJSON(url)` 실행
3. 내부에서 `increment()` 먼저 실행
4. `fetch()`로 외부 데이터 요청
5. 결과를 `json` 상태에 저장
6. 필요하면 다른 컴포넌트에서도 같은 상태 공유 가능

---

## 4. 왜 이렇게 설계하는가

### `router`를 따로 분리하는 이유

라우팅 설정이 커지면 `main.js`에 모든 경로를 넣는 것은 비효율적입니다.
파일을 분리하면 관리가 쉬워지고, 페이지가 많아져도 구조가 깔끔합니다.

### `stores` 폴더를 따로 두는 이유

상태 관리 코드를 화면 컴포넌트 안에 섞어두면 재사용이 어렵습니다.
별도 store 파일로 분리하면 여러 컴포넌트가 같은 상태를 공유하기 쉽습니다.

### Option Store와 Setup Store를 둘 다 두는 이유

실무에서는 둘 다 볼 수 있습니다.
학습 단계에서 둘의 문법 차이와 공통 개념을 함께 비교하면 이해가 빨라집니다.

### `storeToRefs()`를 쓰는 이유

store 객체를 구조 분해할 때 반응형 연결이 끊길 수 있습니다.
그래서 state/getter는 `storeToRefs()`로 꺼내는 습관이 중요합니다.

### action은 왜 직접 쓰는가

action은 함수이므로 ref로 감쌀 필요가 없습니다.
오히려 store 객체에서 직접 꺼내는 편이 더 단순하고 명확합니다.

---

## 5. 포인트

### 1. Pinia의 장점은?

- Vuex보다 문법이 간단합니다.
- TypeScript 친화적입니다.
- store를 모듈처럼 직관적으로 만들 수 있습니다.
- Composition API와 잘 어울립니다.

### 2. `mapState`와 `storeToRefs` 차이는?

- `mapState`는 주로 Option API에서 편하게 연결할 때 사용합니다.
- `storeToRefs`는 Composition API에서 반응성을 유지하며 구조 분해할 때 사용합니다.

### 3. getter와 computed의 관계는?

- 둘 다 **파생 데이터**를 만든다는 점에서 비슷합니다.
- Pinia getter는 store 내부의 computed 개념으로 이해하면 쉽습니다.

### 4. action 안에서 다른 action을 호출할 수 있는가?

- 가능합니다.
- Option Store에서는 `this.increment()`처럼 호출할 수 있습니다.
- Setup Store에서는 일반 함수 호출처럼 `increment()`를 사용합니다.

---
