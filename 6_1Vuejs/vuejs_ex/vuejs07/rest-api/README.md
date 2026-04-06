# rest-api

server 작업

1. express()로 서버 만든다.
2. express.json()으로 JSON 요청을 받는다.
3. app.get/post/put/patch/delete()로 API를 만든다.
4. req.body로 요청 데이터를 받는다.
5. req.params.id로 URL 값을 받는다.
6. 파일을 읽고(readFile) 수정 후 다시 저장(writeFile)한다.

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
