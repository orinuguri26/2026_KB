# Vue + Pinia

---

## 1. 프로젝트 목적

이 예제는 다음 4가지를 이해하기 위한 구조입니다.

1. **Vue 앱이 어떻게 시작되는가**
2. **Vue Router가 화면 전환을 어떻게 처리하는가**
3. **Pinia Store를 Options 방식과 Setup 방식으로 어떻게 만드는가**
4. **각 페이지에서 Store를 어떻게 읽고 액션을 호출하는가**

---

## 2. 폴더 구조

```bash
02/
├─ index.html
├─ package.json
├─ vite.config.js
├─ README.md
└─ src/
   ├─ main.js
   ├─ App.vue
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

## 3. 전체 동작 흐름

### 1단계: 앱 시작

- `src/main.js`에서 Vue 앱을 생성합니다.
- Router와 Pinia를 등록합니다.
- 마지막에 `#app`에 마운트합니다.

### 2단계: 공통 레이아웃 구성

- `src/App.vue`는 최상위 컴포넌트입니다.
- 상단 메뉴(`RouterLink`)와 페이지가 표시될 영역(`RouterView`)을 가집니다.

### 3단계: URL에 따라 페이지 분기

- `src/router/index.js`가 `/`와 `/about` 경로를 관리합니다.
- `/` → `HomeView.vue`
- `/about` → `AboutView.vue`

### 4단계: 상태 관리

- `src/stores/countOption.js`는 **Options Store 방식**입니다.
- `src/stores/countSetup.js`는 **Setup Store 방식**입니다.
- 두 store 모두 `num`, `doubleNum`, `increment()`, `getJSON()` 구조

### 5단계: 화면에서 store 사용

- `HomeView.vue`는 **Options API 컴포넌트**에서 `mapState`, `mapActions`를 이용해 store를 연결합니다.
- `AboutView.vue`는 **Composition API 컴포넌트**에서 store 인스턴스를 직접 만들고 `storeToRefs`를 사용합니다.

---

## 4. 파일별 해석

### `main.js`

이 파일은 프로젝트의 진입점입니다.

- `App.vue`를 불러옵니다.
- `router/index.js`를 불러옵니다.
- Pinia를 생성하여 앱 전체에서 store를 사용할 수 있게 만듭니다.

  **모든 연결의 시작점**입니다.

---

### `App.vue`

이 파일은 전체 화면의 뼈대입니다.

- `RouterLink`는 사용자가 페이지를 이동할 수 있는 메뉴입니다.
- `RouterView`는 현재 경로에 맞는 페이지를 출력하는 자리입니다.

즉, **공통 레이아웃 담당 파일**입니다.

---

### `router/index.js`

이 파일은 URL과 페이지 컴포넌트를 연결합니다.

- `/` 경로는 `HomeView.vue`를 보여줍니다.
- `/about` 경로는 `AboutView.vue`를 보여줍니다.

즉, **화면 전환 규칙 담당 파일**입니다.

---

### `stores/countOption.js`

이 파일은 Pinia의 **Options Store 스타일**입니다.

구성은 다음과 같습니다.

- `state`: 원본 데이터
- `getters`: 계산된 값
- `actions`: 데이터 변경 및 비동기 처리

즉, **객체 중심으로 store를 정의하는 방식**입니다.

---

### `stores/countSetup.js`

이 파일은 Pinia의 **Setup Store 스타일**입니다.

구성은 다음과 같습니다.

- `ref()`로 상태 생성
- `computed()`로 계산값 생성
- 일반 함수로 액션 작성
- 마지막에 `return`으로 외부 공개

즉, **Composition API 감각으로 store를 정의하는 방식**입니다.

---

### `views/HomeView.vue`

이 파일은 Options API 방식의 페이지입니다.

- `mapState()`로 store의 상태와 getter를 가져옵니다.
- `mapActions()`로 store의 action을 메서드처럼 연결합니다.

즉, **Options API에서 Pinia를 연결하는 예제**입니다.

---

### `views/AboutView.vue`

이 파일은 Composition API 방식의 페이지입니다.

- store를 직접 생성합니다.
- `storeToRefs()`로 state/getter를 반응형으로 분리합니다.
- action은 store 인스턴스로 직접 호출합니다.

즉, **Composition API에서 Pinia를 직접 다루는 예제**입니다.

---

## 5. 파일 간 연결 관계 한눈에 보기

```text
main.js
 ├─ App.vue
 ├─ router/index.js
 └─ Pinia 등록

App.vue
 ├─ RouterLink
 └─ RouterView
      ├─ HomeView.vue
      │   ├─ countOption.js
      │   └─ countSetup.js
      └─ AboutView.vue
          ├─ countOption.js
          └─ countSetup.js
```

- `main.js`가 앱을 시작하고,
- `App.vue`가 공통 뼈대를 만들고,
- `router/index.js`가 어떤 페이지를 보여줄지 정하고,
- 각 페이지(`HomeView`, `AboutView`)가 Pinia store를 사용해 데이터를 읽고 변경합니다.
