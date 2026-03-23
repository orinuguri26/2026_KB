const axios = require('axios'); //axios 임포트

async function getTop20Movies() {
  //await를 사용하여 동기화 시키기 위해 async 붙임

  const url =
    'https://raw.githubusercontent.com/wapj/musthavenodejs/main/movieinfo.json';

  //http 네트워크에서 데이터를 받아오므로 await로 기다려야 한다.
  try {
    const result = await axios.get(url);
    const { data } = result;
    if (!data.articleList || data.articleList.size == 0) {
      throw new Error('데이터가 없습니다.');
    }

    //data에서 필요한 영화 제목과 순위를 정보를 뽑아내자
    const movieInfos = data.articleList.map((article, index) => {
      return { title: article.title, rank: index + 1 };
    });

    //(데이터) 영화정보 출력
    for (let movieinfo of movieInfos) {
      console.log(`[${movieinfo.rank}위]  ${movieinfo.title}`);
    }
  } catch (error) {
    throw new Error(error);
  }
}

getTop20Movies();
