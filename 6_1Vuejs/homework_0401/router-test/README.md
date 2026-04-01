## router-test (4월1일 과제)

vue-router 기본 라우팅 과제  
Vue Router 기본 라우팅 실습을 단계적으로 완성하는 내용입니다.

1. router-test 프로젝트를 만들기

2. Home, About, Members, Videos 페이지 컴포넌트 만들기
   페이지 4개 만들기
   각각 하나의 화면 역할을 하는 Home.vue, About.vue, Members.vue, Videos.vue를 만듭니다.
   <h2> 제목을 보여주기 출력

3. 라우터 설정하기
   vue-router로 각 URL과 페이지를 연결하기
   /, /about, /members, /videos 경로를 각각 해당 페이지 컴포넌트와 연결합니다.
   이 작업은 src/router/index.js에서 합니다.

4. Header 메뉴 만들어 App.vue에서 연결하기
   Bootstrap 기반의 반응형 Header 메뉴를 만들고, App.vue에서 메뉴 클릭 시 해당 페이지가 보이게 구성
   (화면이 좁아지면 햄버거 버튼으로 접히는 반응형 메뉴)
   About.vue에서는 현재 URL을 화면에 출력하고 라우터 객체를 콘솔에 찍도록 요구합니다.
   Header를 올리고, <RouterView />를 배치하면 메뉴 클릭 시 해당 페이지 출력

5. About 페이지 추가 기능
   {{$route.fullPath}}로 현재 URL을 출력하고, created()에서 console.log(this.$route)를 실행

## 실행 방법

```bash
npm install
npm run dev
```

## 구성 파일

- `src/router/index.js`: 라우터 경로 설정
- `src/components/Header.vue`: 반응형 메뉴바
- `src/pages/*.vue`: 각 페이지 컴포넌트
- `src/App.vue`: Header와 RouterView 연결

## 구현 내용

- `/` → Home
- `/about` → About
- `/members` → Members
- `/videos` → Videos
- About 페이지에서 현재 URL 출력
- About 페이지 created 훅에서 `this.$route` 콘솔 출력
