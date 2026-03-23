//회원가입이 3단계로 이루어진다.
//1.회원가입 API 호출되면 데이터베이스에 회원의 정보 저장
//2. 이메일을 보내고
//3. 성공메시지를 보여준다.
//해당 시나리오에서 사용할 API를 콜백방식으로 작성

const DB = []; //회원의 정보 저장

//회원가입 API함수
function register(user) {
  return saveDB(user, function (user) {
    return sendEmail(user, function (user) {
      return getResult(user);
    });
  });
}

//가입요청한 회원의 정보를 저장하는 API 함수
function saveDB(user, callback) {
  DB.push(user);
  console.log(`save ${user.name} to DB`);
  return callback(user);
}

//회원의 정보를 저장 후 회원에게 이메일 발송 API함수
function sendEmail(user, callback) {
  console.log(`email to ${user.email}`);
  return callback(user);
}

//회원에게 가입 성공 메세지 출력 API함수
function getResult(user) {
  return `success register ${user.name}님!`;
}

const result = register({
  email: 'yomi@gmail.com',
  password: '1234',
  name: 'YUMI',
});
console.log(result);

// register()함수는
// saveDB()
// sendEmail()
// getResult()
// 차례로 함수가 실행된다.
// 여기서 보장하는 것은 함수의 실행 순서
