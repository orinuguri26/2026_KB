# Vue Router 학습

## **Vue 3 + Vue Router**의 가장 기본적인 구조를 이해 복습하기

## 1. 프로젝트 목표

- Vue 앱이 어디서 시작되는지
- `main.js`가 어떤 역할을 하는지
- `App.vue`가 왜 루트 컴포넌트인지
- `router/index.js`에서 URL과 컴포넌트를 어떻게 연결하는지
- `RouterLink`, `RouterView`가 어떤 방식으로 동작하는지
- 각 View 파일이 실제 페이지처럼 어떻게 교체 출력되는지

---

## 2. 폴더 구조

```bash
vue-router-annotated-project/
├─ index.html
├─ package.json
├─ vite.config.js
├─ README.md
└─ src/
   ├─ main.js
   ├─ App.vue
   ├─ router/
   │  └─ index.js
   └─ views/
      ├─ HomeView.vue
      └─ AboutView.vue
```

---

## 3. 파일 관계 한눈에 보기

```text
index.html
   ↓
src/main.js
   ↓
App.vue
   ↓
router/index.js
   ↓
HomeView.vue / AboutView.vue
```

하지만 실제 동작 흐름은 아래처럼 이해하는 것이 더 정확합니다.

### 동작 흐름

1. **index.html** 안의 `<div id="app"></div>` 가 Vue 앱이 붙는 자리입니다.
2. **main.js** 가 실행되면서 `App.vue`를 루트 컴포넌트로 생성합니다.
3. `main.js` 에서 `router`를 `app.use(router)`로 등록합니다.
4. **App.vue** 안에는 메뉴 역할의 `RouterLink`와 화면 출력 자리인 `RouterView`가 있습니다.
5. **router/index.js** 는 현재 URL이 `/` 인지 `/about` 인지 확인해서 어떤 컴포넌트를 보여줄지 결정합니다.
6. 그 결과가 **HomeView.vue** 또는 **AboutView.vue** 로 `RouterView` 위치에 표시됩니다.

---

## 4. 각 파일의 역할 상세 설명

### 4-1. `index.html`

- 브라우저가 처음 여는 HTML 파일입니다.
- Vue는 이 파일 전체를 바꾸는 것이 아니라, `id="app"` 인 요소 안쪽만 제어합니다.
- `src/main.js` 를 불러와서 Vue 앱 실행을 시작합니다.

### 4-2. `src/main.js`

- Vue 프로젝트의 시작 파일입니다.
- `createApp(App)` 으로 루트 컴포넌트를 생성합니다.
- `app.use(router)` 로 라우터 기능을 등록합니다.
- `app.mount('#app')` 로 실제 화면에 붙입니다.

즉, **앱 부팅 담당 파일**입니다.

### 4-3. `src/App.vue`

- 전체 앱에서 가장 바깥쪽 공통 레이아웃입니다.
- 상단 메뉴(`RouterLink`)를 가지고 있습니다.
- 실제 페이지 내용은 `RouterView` 위치에서 바뀝니다.

즉, **공통 틀(레이아웃) 역할**을 합니다.

### 4-4. `src/router/index.js`

- URL 경로와 컴포넌트를 연결합니다.
- `/` 경로는 `HomeView.vue`
- `/about` 경로는 `AboutView.vue`
- 브라우저 주소에 따라 어떤 컴포넌트를 보여줄지 결정합니다.

즉, **페이지 이동 규칙을 관리하는 파일**입니다.

### 4-5. `src/views/HomeView.vue`

- 홈 화면 컴포넌트입니다.
- 사용자가 `/` 로 접속했을 때 출력됩니다.

즉, **첫 화면 페이지 파일**입니다.

### 4-6. `src/views/AboutView.vue`

- 소개 페이지 컴포넌트입니다.
- 사용자가 `/about` 으로 이동했을 때 출력됩니다.

즉, **소개 페이지 파일**입니다.

---

## 5. 왜 이런 구조로 나누는가?

### `main.js`와 `App.vue`를 분리하는 이유

- `main.js`는 앱 실행 담당
- `App.vue`는 화면 구조 담당

즉, **실행 로직**과 **UI 구조**를 분리해서 관리하기 쉽도록 합니다.

### `router/index.js`를 따로 두는 이유

라우터 설정이 많아지면 `main.js`에 같이 쓰기 복잡해집니다.
그래서 보통 라우터 설정을 별도 파일로 분리합니다.

### `views` 폴더를 따로 두는 이유

`HomeView`, `AboutView`처럼 **페이지 단위 컴포넌트**를 일반 컴포넌트와 구분하기 위해서입니다.
실무에서도 자주 사용하는 구조입니다.

---

## 6. 핵심 개념 정리

### `RouterLink`

일반 `<a>` 태그처럼 보이지만,
Vue Router 방식으로 페이지를 이동합니다.
전체 새로고침 없이 화면만 바뀝니다.

예:

```vue
<RouterLink to="/about">About</RouterLink>
```

### `RouterView`

현재 URL에 맞는 컴포넌트를 출력하는 자리입니다.

예:

```vue
<RouterView />
```

### 정적 import 와 동적 import 차이

#### 정적 import

```js
import HomeView from '../views/HomeView.vue';
```

- 앱 시작 시 바로 불러옵니다.
- 자주 쓰는 페이지에 적합합니다.

#### 동적 import

```js
component: () => import('../views/AboutView.vue');
```

- 해당 페이지에 들어갈 때만 파일을 불러옵니다.
- 초기 로딩 성능 최적화에 도움됩니다.

---

## 7. 실행 방법

## 1) 패키지 설치

```bash
npm install
```

## 2) 개발 서버 실행

```bash
npm run dev
```

## 3) 브라우저 접속

Vite가 안내하는 주소로 접속합니다.
보통 아래와 비슷합니다.

```bash
http://localhost:5173
```

---

## 8. 마무리 학습 포인트

1. `main.js`가 없다면 Vue 앱은 어디서 시작될까?
2. `app.use(router)` 를 제거하면 어떤 일이 생길까?
3. `RouterView` 를 지우면 페이지는 어디에 출력될까?
4. `RouterLink` 대신 `<a href>` 를 쓰면 어떤 차이가 생길까?
5. `path: '/'` 와 `path: '/about'` 는 무엇을 기준으로 매칭될까?
6. 왜 `views` 폴더를 따로 두는가?
7. lazy loading은 왜 사용하는가?

---
