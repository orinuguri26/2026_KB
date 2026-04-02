// express 모듈 가져오기
// 웹 서버를 쉽게 만들 수 있게 해주는 대표적인 Node.js 프레임워크
const express = require('express');

// fs/promises 모듈 가져오기
// 파일 읽기/쓰기 기능을 Promise 기반으로 사용할 수 있게 해줌
const fs = require('fs/promises');

// path 모듈 가져오기
// 운영체제에 맞는 안전한 파일 경로를 만들 때 사용
const path = require('path');

// express 애플리케이션 생성
const app = express();

// 서버가 실행될 포트 번호
const port = 3000;

// 현재 파일이 있는 폴더(__dirname)를 기준으로 data.json의 절대경로 생성
// 예: C:\project\data.json
const dataFilePath = path.join(__dirname, 'data.json');

// 클라이언트가 보낸 JSON 형식의 요청 본문(body)을
// 자바스크립트 객체로 변환해서 req.body에 넣어주는 미들웨어
app.use(express.json());

// 간단한 CORS 설정 미들웨어
// 다른 주소(예: Vue 프론트엔드)에서도 이 서버에 요청할 수 있도록 허용
app.use((req, res, next) => {
  // 모든 출처(origin)에서 접근 허용
  res.header('Access-Control-Allow-Origin', '*');

  // 허용할 HTTP 메서드 지정
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  // 다음 미들웨어 또는 라우터로 이동
  next();
});

// ==============================
// GET: 모든 데이터 가져오기
// 주소: GET /api/data
// 기능: data.json 파일의 전체 데이터를 읽어서 반환
// ==============================
app.get('/api/data', async (req, res) => {
  try {
    // 파일에서 전체 데이터 읽기
    const data = await readDataFile();

    // 읽어온 데이터를 JSON 형태로 응답
    res.json(data);
  } catch (error) {
    // 서버 내부 오류 발생 시 500 응답
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// ==============================
// POST: 새로운 데이터 추가하기
// 주소: POST /api/data
// 기능: 클라이언트가 보낸 데이터를 기반으로 새 항목 생성
// ==============================
app.post('/api/data', async (req, res) => {
  try {
    // 클라이언트가 보낸 새 데이터
    // 예: { name: "홍길동", description: "테스트" }
    const newData = req.body;

    // 기존 전체 데이터 읽기
    const data = await readDataFile();

    // 실제로 저장할 새 객체 생성
    // id는 현재 길이 + 1
    // name, description 뒤에도 번호를 붙여 저장
    const writeData = {
      id: data.length + 1,
      name: `${newData.name} ${data.length + 1}`,
      description: `${newData.description} ${data.length + 1}`,
    };

    // 새 데이터를 배열에 추가
    data.push(writeData);

    // 변경된 배열을 파일에 다시 저장
    await writeDataFile(data);

    // 현재 코드는 newData를 응답으로 보냄
    // 실무적으로는 writeData를 보내는 것이 더 자연스러움
    res.json(newData);
  } catch (error) {
    // 에러 로그 출력
    console.log(error);

    // 서버 내부 오류 응답
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// ==============================
// PUT: 데이터 전체 업데이트하기
// 주소: PUT /api/data/:id
// 기능: 특정 id의 데이터를 수정
// ==============================
app.put('/api/data/:id', async (req, res) => {
  try {
    // URL의 id 값을 숫자로 변환
    // 예: /api/data/3 -> 3
    const id = Number(req.params.id);

    // 클라이언트가 보낸 수정 데이터
    const updatedData = req.body;

    // 파일에서 기존 데이터 읽기
    const data = await readDataFile();

    // 해당 id를 가진 데이터의 위치(index) 찾기
    const index = data.findIndex((item) => item.id === id);

    // 해당 데이터가 존재하면
    if (index !== -1) {
      // 기존 객체에 새 데이터를 덮어써서 수정
      // 예: {id:1, name:"a", description:"b"} + {name:"수정"} -> name만 변경
      data[index] = { ...data[index], ...updatedData };

      // 수정된 전체 배열을 파일에 저장
      await writeDataFile(data);

      // 수정된 데이터 응답
      res.json(data[index]);
    } else {
      // id에 해당하는 데이터가 없으면 404 응답
      res.status(404).json({ error: 'Not Found' });
    }
  } catch (error) {
    // 서버 내부 오류 응답
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// ==============================
// PATCH: 데이터 부분 업데이트하기
// 주소: PATCH /api/data/:id
// 기능: 특정 id의 데이터 일부만 수정
// ==============================
app.patch('/api/data/:id', async (req, res) => {
  try {
    // URL의 id 값을 숫자로 변환
    const id = Number(req.params.id);

    // 클라이언트가 보낸 일부 수정 데이터
    const partialData = req.body;

    // 기존 데이터 읽기
    const data = await readDataFile();

    // 수정할 대상의 index 찾기
    const index = data.findIndex((item) => item.id === id);

    // 해당 데이터가 존재하면
    if (index !== -1) {
      // 기존 값은 유지하고, 전달된 값만 덮어쓰기
      data[index] = { ...data[index], ...partialData };

      // 파일에 다시 저장
      await writeDataFile(data);

      // 수정된 데이터 반환
      res.json(data[index]);
    } else {
      // 해당 id가 없으면 404
      res.status(404).json({ error: 'Not Found' });
    }
  } catch (error) {
    // 서버 내부 오류 응답
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// ==============================
// DELETE: 데이터 삭제하기
// 주소: DELETE /api/data/:id
// 기능: 특정 id의 데이터를 삭제
// ==============================
app.delete('/api/data/:id', async (req, res) => {
  try {
    // URL에서 id 추출 후 숫자로 변환
    const id = Number(req.params.id);

    // 기존 데이터 읽기
    const data = await readDataFile();

    // 삭제할 데이터의 index 찾기
    const index = data.findIndex((item) => item.id === id);

    // 해당 데이터가 존재하면
    if (index !== -1) {
      // splice(index, 1) : index 위치에서 1개 삭제
      // [0] : 삭제된 첫 번째 요소 꺼내기
      const deletedItem = data.splice(index, 1)[0];

      // 삭제 후 남은 데이터 다시 파일에 저장
      await writeDataFile(data);

      // 삭제된 데이터 응답
      res.json(deletedItem);
    } else {
      // 삭제 대상이 없으면 404
      res.status(404).json({ error: 'Not Found' });
    }
  } catch (error) {
    // 서버 내부 오류 응답
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// ==============================
// Helper 함수: 데이터 파일 읽기
// 기능: data.json 파일을 읽어서 JS 배열로 반환
// ==============================
async function readDataFile() {
  // data.json 파일을 UTF-8 문자열로 읽기
  const data = await fs.readFile(dataFilePath, 'utf-8');

  // 파일 내용이 있으면 JSON.parse로 JS 객체/배열로 변환
  // 비어 있으면 빈 배열 반환
  return data ? JSON.parse(data) : [];
}

// ==============================
// Helper 함수: 데이터 파일 쓰기
// 기능: JS 배열을 JSON 문자열로 바꿔 data.json 파일에 저장
// ==============================
async function writeDataFile(data) {
  // JSON.stringify(data, null, 2)
  // null, 2는 보기 좋게 들여쓰기 2칸으로 저장
  await fs.writeFile(dataFilePath, JSON.stringify(data, null, 2), 'utf-8');
}

// ==============================
// 서버 실행
// localhost:3000 에서 서버 시작
// ==============================

app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`);
});
