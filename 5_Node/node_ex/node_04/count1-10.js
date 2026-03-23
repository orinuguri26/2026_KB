function waitOneSecond(message) {
  return new Promise((resolve, _) => {
    setTimeout(() => {
      resolve(`${message}`);
    }, 1000);
  });
} //1초 대기하고 전달 받은 메시지 출력

async function CountOneToTen() {
  //10초 동안 1초마다 숫자메시지를 출력
  for (let number of [...Array(10).keys()]) {
    // [...Array(10).keys()] [0,1,2,3,4,5,6,7,8,9]리스트 이다.
    let result = await waitOneSecond(`${number + 1}초 대기중 ....`);
    console.log(result);
  }
  console.log('카운트 완료');
}

CountOneToTen();

//Promise 와 async 와 await 사용해서 비동기 함수를 동기방식 코드처럼 직관화 하여 작성해 봄
