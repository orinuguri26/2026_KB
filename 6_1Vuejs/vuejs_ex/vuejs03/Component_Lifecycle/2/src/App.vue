<script>
import FirstChild from './components/FirstChild.vue';

export default {
  components: {
    FirstChild,
  },

  mounted() {
    const childNum = this.$refs.child.num;
    const childDoubleNum = this.$refs.child.doubleNum;
    console.log(`메서드 호출전 :  ${childNum}`); //5
    console.log(`메서드 호출후 :  ${childDoubleNum}`); //10

    setTimeout(() => {
      this.$refs.child.increment();
      console.log(`메서드 호출전 :  ${childNum}`); //5
      console.log(`메서드 호출후 :  ${childDoubleNum}`); //10
    }, 1000);
  },
};
</script>
<template>
  <FirstChild ref="child" />
</template>
