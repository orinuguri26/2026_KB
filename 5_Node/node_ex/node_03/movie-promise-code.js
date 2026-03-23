const axios = require('axios'); //axios 임포트
const url =
  'https://raw.githubusercontent.com/wapj/musthavenodejs/main/movieinfo.json';

axios
  .get(url) //GET요청
  .then((result) => {
    //결과처리
    if (result.status != 200) {
      throw new Error('요청에 실패하였습니다.');
    }
    if (result.data) {
      return result.data; //result.data가 있으면 결과를 반환
    }
    throw new Error('전송받은 데이터가 없습니다');
  })
  .then((data) => {
    if (!data.articleList && data.articleList.size == 0) {
      throw new Error('데이터가 없습니다');
    }
    return data.articleList; //영화리스트 반환
  })
  .then((articles) => {
    return articles.map((article, idx) => {
      return { title: article.title, rank: idx + 1 };
    });
  })
  .then((results) => {
    for (let movieinfo of results) {
      console.log(`${movieinfo.rank}위 ${movieinfo.title}`);
    }
  })
  .catch((err) => {
    console.log('<<에러 발생>>');
    console.error(err);
  });
