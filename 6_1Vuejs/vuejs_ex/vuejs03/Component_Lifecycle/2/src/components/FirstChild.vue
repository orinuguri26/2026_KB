<!-- 뷰에서는 HTML에서 지원하지 않는 ref 속성을 지원하고 있다.
      ref속성은 문서객체(DOM)을 참조할때와 컴포넌트를 참조할때 사용
 -->
<script>
export default {
  data() {
    return {
      num: 5,
    };
  },
  computed: {
    doubleNum() {
      return this.num * 2;
    },
  },
  methods: {
    increment() {
      this.num++;
    },
  },
};
</script>
<template>
  <h1>{{ num }}</h1>
</template>
