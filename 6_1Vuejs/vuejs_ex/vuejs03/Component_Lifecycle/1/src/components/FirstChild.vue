<script>
export default {
  beforeUnmount() {
    console.log('beforeUnmount');
  },
  unmounted() {
    console.log('unmounted');
  },
};
</script>
<template>
  <h1>First Child</h1>
</template>
