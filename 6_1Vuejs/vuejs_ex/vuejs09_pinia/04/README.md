# Vue + Pinia 장바구니

1. **화면 이동**: `Vue Router`
2. **전역 상태 공유**: `Pinia`
3. **반응형 화면 갱신**: `reactive`, `computed`

---

## 1. 프로젝트 구조

```bash
04/
├─ README.md
└─ src/
   ├─ App.vue
   ├─ main.js
   ├─ router/
   │  └─ index.js
   ├─ stores/
   │  └─ cart.js
   └─ views/
      ├─ HomeView.vue
      └─ CartView.vue
```

---![alt text](image.png)

## 2. 파일별 역할 정리

### `src/main.js`

애플리케이션의 시작점입니다.

- Vue 앱 생성
- Pinia 등록
- Router 등록
- `App.vue`를 `#app`에 마운트

---

### `src/App.vue`

최상위 루트 컴포넌트입니다.

- 현재 구조에서는 공통 레이아웃 역할만 수행
- `<RouterView />`를 통해 현재 URL에 해당하는 화면을 표시

---

### `src/router/index.js`

라우터 설정 파일입니다.

- `/` → `HomeView.vue`
- `/cart` → `CartView.vue`

특징:

- `HomeView`는 정적 import
- `CartView`는 동적 import

이 구조는 실제 실무에서도 많이 쓰며,
초기 로딩 속도 최적화 관점에서 의미가 있습니다.

---

### `src/stores/cart.js`

전역 상태 저장소입니다.

관리하는 데이터:

- `item`: 전체 상품 목록
- `cartItem`: 장바구니에 담긴 상품 id 목록

제공하는 기능:

- `outCart(id)`: 개별 상품 제거
- `clearCart()`: 전체 비우기

**여러 화면이 함께 사용하는 공용 데이터 센터**입니다.

---

### `src/views/HomeView.vue`

상품 목록 화면입니다.

역할:

- 전체 상품 출력
- 장바구니 담기
- 장바구니 제거
- 장바구니로 이동

즉, 사용자가 상품을 탐색하고 장바구니 상태를 바꾸는 **입구 화면**입니다.

---

### `src/views/CartView.vue`

장바구니 화면입니다.

역할:

- 현재 담긴 상품만 필터링해서 출력
- 개별 삭제
- 전체 비우기
- 총액 계산 후 결제 메시지 표시

즉, 장바구니 상태를 확인하고 정리하는 **결과 확인 화면**입니다.

---

## 3. 파일들 사이의 관계

이 프로젝트의 연결 흐름은 아래처럼 이해하면 됩니다.

```text
main.js
  └─ App.vue
      └─ RouterView
          ├─ HomeView.vue
          └─ CartView.vue

HomeView.vue ─┐
              ├─ stores/cart.js
CartView.vue ─┘
```

### 관계 설명

#### 1) `main.js` → `App.vue`

앱을 처음 실행하면 `main.js`가 `App.vue`를 루트로 마운트합니다.

#### 2) `main.js` → `router/index.js`

`main.js`가 라우터를 등록하기 때문에,
앱 전체에서 URL에 따라 화면 전환이 가능합니다.

#### 3) `App.vue` → `RouterView`

`App.vue`는 현재 경로에 맞는 화면을 출력하는 컨테이너 역할을 합니다.

#### 4) `router/index.js` → `HomeView.vue`, `CartView.vue`

라우터가 URL에 따라 실제 보여줄 화면 컴포넌트를 선택합니다.

#### 5) `HomeView.vue` ↔ `stores/cart.js`

홈 화면은 스토어의 상품 목록을 읽고,
버튼 클릭으로 장바구니 상태를 변경합니다.

#### 6) `CartView.vue` ↔ `stores/cart.js`

장바구니 화면도 같은 스토어를 사용하므로,
홈 화면에서 담은 결과가 즉시 반영됩니다.

즉, 두 화면은 서로 직접 데이터를 주고받지 않고,
**공통 스토어를 통해 상태를 공유**합니다.

---

## 4. 동작 흐름

### A. 앱 시작

1. `main.js`에서 앱 생성
2. Pinia와 Router 등록
3. `App.vue` 마운트
4. 현재 URL이 `/`이면 `HomeView.vue` 렌더링

### B. 상품 담기

1. 사용자가 `HomeView.vue`에서 `담기` 버튼 클릭
2. 해당 상품 id가 `cartStore.cartItem` 배열에 추가됨
3. 반응형 상태가 바뀌므로 화면이 즉시 갱신됨
4. 해당 상품은 취소선이 적용되고 버튼이 `삭제`로 변경됨

### C. 장바구니 보기

1. 사용자가 `/cart`로 이동
2. `CartView.vue`가 렌더링됨
3. `computed()`가 `item` 목록 중 `cartItem`에 포함된 상품만 필터링함
4. 실제 장바구니 목록이 화면에 표시됨

### D. 결제 버튼 클릭

1. `computed`된 장바구니 목록을 순회
2. `reduce()`로 총액 계산
3. `alert()`로 결제 메시지 표시

### E. 전체 비우기

1. `CartView.vue`에서 `allClear()` 호출
2. 스토어의 `clearCart()` 실행
3. `cartItem` 길이가 0이 됨
4. 화면이 즉시 “장바구니가 비어있습니다.”로 바뀜

---

## 5. 왜 이렇게 설계하는가

### 1) 왜 `Pinia`를 사용하는가?

`HomeView.vue`와 `CartView.vue`는 서로 다른 페이지입니다.
이 둘이 같은 장바구니 데이터를 공유해야 하므로,
상태를 한 곳에 모아 관리하는 것이 좋습니다.

만약 스토어가 없으면:

- props 전달이 복잡해지고
- 페이지 이동 시 상태 공유가 불편하고
- 코드 유지보수가 어려워집니다.

그래서 **전역 상태 관리 도구인 Pinia**를 사용합니다.

---

### 2) 왜 장바구니에 상품 전체 객체가 아니라 `id`만 저장하는가?

현재 설계는 장바구니에 아래처럼 저장합니다.

```js
[1, 3, 4];
```

이 방식의 장점:

- 중복 데이터 저장 감소
- 상품 원본 데이터와 장바구니 데이터를 분리 가능
- 가격/이름이 바뀌어도 원본 목록 기준으로 다시 계산 가능

즉, **데이터 정규화 관점에서 더 깔끔한 구조**입니다.

---

### 3) 왜 `CartView.vue`에서 `computed()`를 쓰는가?

장바구니 목록은 원본 상태가 아니라,
`item`과 `cartItem`을 조합해서 만든 **파생 데이터**입니다.

이런 값은 `computed`로 만드는 것이 적절합니다.

이유:

- 자동 캐싱
- 관련 상태가 바뀌면 자동 재계산
- 템플릿에서 읽기 쉬움

즉, `computed`는 “원본 데이터를 가공한 결과”를 표현할 때 적합합니다.

---

### 4) 왜 상태 변경 로직을 스토어 액션으로 모으는가?

삭제/비우기 같은 상태 변경을 컴포넌트 안에 흩어 놓으면,
나중에 코드가 커질수록 관리가 어려워집니다.

그래서:

- 컴포넌트는 사용자 입력 처리
- 스토어는 상태 변경 책임 담당

이렇게 역할을 나누는 것이 더 유지보수에 좋습니다.

---

## 6. 이 프로젝트에서 배울 수 있는 핵심 개념

- Vue 3의 `script setup`
- Pinia 스토어 정의와 사용
- `storeToRefs()`의 필요성
- `reactive()`를 통한 반응형 배열/객체 관리
- `computed()`를 통한 파생 상태 생성
- Vue Router를 이용한 페이지 전환
- 여러 화면이 하나의 전역 상태를 공유하는 구조

---

## 7. 추가 기능 개선점

### 기능 개선

- 상품 수량(quantity) 추가
- 장바구니 중복 담기 방지 로직을 스토어 액션으로 이동
- 총액을 `computed`로 분리
- 결제 버튼 비활성화 처리(장바구니 비어 있을 때)
- 로컬스토리지 저장으로 새로고침 후 상태 유지
- 가격 표시를 `₩1,000` 형태로 포맷팅

### 구조 개선

- `actions` 성격의 함수명 통일 (`addToCart`, `removeFromCart`, `clearCart`)
- 상품 타입 정의 분리
- 컴포넌트 분리 (`ProductList`, `CartList`, `PriceSummary`)
- API 통신 구조 추가


이 프로젝트의 핵심은
**“페이지는 나뉘어 있어도 상태는 하나로 공유할 수 있다”**는 점입니다.
