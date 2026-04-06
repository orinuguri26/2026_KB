<script setup>
import axios from 'axios';
const getData = () => {
  axios
    .get('/api/data')
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(`데이터를 가져오던 중 에러 발생:`, error);
    });
};

const postData = async () => {
  try {
    const response = await axios.post('/api/data', {
      name: '국민이',
      description: '테스트 데이터',
    });
    console.log('등록성공', response.data);
    alert('등록이 완료되엇습니다.');
  } catch (error) {
    console.error('등록 실패', error);
    alert('등록 중 문제가 발생했습니다.');
  }
};
</script>

<template>
  <div>
    <button type="button" @click="postData">POST</button><br />
    <button type="button" @click="getData">GET</button> <br />
    <button type="button">PUT</button> <br />
    <button type="button">PATCH</button> <br />
  </div>
</template>

<style scoped></style>
