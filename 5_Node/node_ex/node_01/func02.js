var getTriangle = function (base, height) {
  return (base * height) / 2;
};

console.log('삼각형의 면적1 :' + getTriangle(5, 2));

let getTriangle1 = (base, height) => (base * height) / 2;
let getTCircle = (radius) => (radius * radius) / Math.PI;
console.log('삼각형의 면적2 :' + getTriangle1(5, 2));
console.log('원의 면적 :' + getTCircle(5));
