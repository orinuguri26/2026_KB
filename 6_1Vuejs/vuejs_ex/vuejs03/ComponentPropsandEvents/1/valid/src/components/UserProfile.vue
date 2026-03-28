<script>
export default {
  emits: [`print-hello`],
  methods: {
    parentEventCall() {
      // this.$emit('print-hello');
      this.$emit(`onPrint-hello`);
    },
  },
};
</script>
<template>
  <!-- <button @click="$emit('print-hello')">클릭</button>  인라인핸들러 방식-->
  <button @click="parentEventCall">클릭</button>
</template>
