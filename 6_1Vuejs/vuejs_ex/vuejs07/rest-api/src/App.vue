<script setup>
import axios from 'axios';
const getData = () => {
  axios
    .get('/api/data')
    .then((response) => {
      console.log(response.data);
    })
    .catch(() => {
      console.log(`데이터를 가져오던 중 에러 발생:`, error);
    });
};

const postData = () => {
  axios
    .post('/api/data', { name: `new Data`, description: `sample data` })
    .then((response) => {
      console.log(response.data);
    })
    .catch(console.log(`데이터를 추가하던 중 에러 발생:`, error));
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
