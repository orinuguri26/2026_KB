# 📘 실습 및 과제를 올리는 공간

일자 별로 주어진 과제 및 실습을 수행하고 기록하여 push함

## 03/23

04 부트스트랩(기본) / 05 스타일 처리(기본) 실습 진행

## 03/28

03/26 주어진 options api 활용한 todoList 실습의 과제로 주어진 기능 추가

### vues04 withteacher

1. 수정 기능

- 수정 icon을 추가하여 click event로 editTodo 함수와 연결
- editTodo에서 v-for로 뿌려준 item중 현 item의 id를 매개변수로 받음
- 받은 id는 반응형 변수인 isEdit에 저장
- 이에 따라 isEdit과 연관된 item.msg를 뿌려주는 span에서 변화를 감지함
- v-if에 따라 isEdit의 값과 item의 id를 비교해 id가 다르면 그대로(수정 상황x)
- id가 같으면 input태그가 활성화 되며 수정 창이 생김
- v-model을 통해 양방향으로 item.msg에 바로 변화내용을 보내 수정함, enter키 누르면 이벤트 발생시켜 endEdit()호출
- endEdit()을 통해 isEdit값을 다시 초기화 하여 수정을 끝났음을 표현함

2. 저장 기능

- App.vue에서 localStorage에 todo-app-options-api로 저장하겠다고 STORAGE_KEY를 생성
- 컴포넌트가 mount될 때 저장된 값을 불러오므로 mounted()로 후킹한다.
- saved변수에 localStorage의 미리 선언했던 STORAGE_KEY에 해당하는 문자열 데이터를 가져온다.
- 해당 데이터(JSON)을 파싱해서 todo 배열에 가져온다.

- watch를 통해서 변화를 감시하고 변화가 생기면 해당 변화값을 저장하도록 한다.
- todo를 감시대상으로 잡고 변화값을 newTodo로 한다.
- localStorage에 STORAGE_KEY에 해당하는 값에 바뀐 내용을 저장해준다.
- 이때 deep: true가 있어야 값에 깊숙히 접근해 내부의 값을 바꿀 수 있다고 한다.

### vues05 todo-composition-localstorage

- 저장기능

1.  loadTodos 함수를 정의한다. saved 변수에 미리선언한 STORAGE_KEY에 해당하는 저장값을 불러온다.
2.  저장값이 있다면 해당 JSON문자열 데이터를 파싱해서 todo에 가져온다.

3.  onmounted를 통해 컴포넌트가 마운트 될 때 loadTodos 함수를 호출해 저장된 값을 불러와준다.

4.  watch를 통해 todo를 감시해주고 값이 변경되면 newTodo로 변화된 값을 처리한다.
5.  setItem을 통해 변화된 값인 newTodo를 저장해준다.

## 03/30

### practice 폴더 생성

1. 실습 과제 수행 후 업로드하기 위한 폴더
2. 각 일자 별 note.md파일에 기억해야할 내용 기록

- 03/04 실습
- 03/05 실습

## 04/02

1. 04/02 실습과제 진행
2. 04/01 실습과제(심화) 진행
