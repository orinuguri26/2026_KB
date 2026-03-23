const order = (bervage, callback) => {
  console.log(`${bervage} 주문접수`);
  setTimeout(() => {
    callback(bervage);
  }, 3000);
};

const display = (result) => {
  console.log(`${result},완료!`);
};

order('아이스 아메리카노', display);
