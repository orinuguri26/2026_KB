<script>
export default {
  // methods: {
  //   parentEventCall() {
  //     this.$emit('print-hello', '영희', 15);
  //   },
  // },
};
</script>
<template>
  <!-- <p>이름: {{ name }}</p>
  <p>나이: {{ age }}</p> -->
  <button @click="$emit('print-hello', '영희', 15)">클릭</button>
</template>
