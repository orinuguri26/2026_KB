const DB = [];

function saveDB(user) {
  const oldDBSize = DB.length + 1; //변경 전 사용자 수 저장
  DB.push(user); //saveDB로 전달받은 사용자 정보를 DB배열에 저장
  console.log(` save ${user.name} to DB`);

  return new Promise((resolve, reject) => {
    //콜백 대신 Promise 객체 반환
    if (DB.length > oldDBSize) {
      resolve(user); //성공 시 유저 정보를 반환
    } else {
      reject(new Error('Save DB Error!')); //실패 시 에러 발생ㅠ
    }
  });
}

function sendEmail(user) {
  console.log(`email to ${user.email}`);
  return new Promise((resolve) => {
    resolve(user);
  });
}

function getResult(user) {
  return new Promise((resolve, reject) => {
    resolve(`success register ${user.name}`); //성공시 성공메시지와 사용자 이름 반환
  });
}

function registerByPromise(user) {
  //비동기 호출이지만, 순서를 지켜서 실행
  const result = saveDB(user)
    .then(sendEmail)
    .then(getResult)
    .catch((error) => new Error(error))
    .finally(() => console.log('프로그램 안전 종료'));
  //아직 완료되지 않았으므로 지연(pending)상태
  //실행이 완료되지 않았는데 result를 출력해 버림
  //우린 이 메세지 출력으로 Promise가 아직 실행 중임을 알 수 있다.
  console.log(result);
  return result;
}

const myUser = {
  email: 'yumi@gmail.com',
  password: '1234',
  name: 'YUMI',
};

const result = registerByPromise(myUser);
//결과가 Promise 객체이므로 then()메서드에 함수를 넣어서 결괏값 출력
result.then(console.log);
