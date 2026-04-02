<script>
export default {
  name: 'NotFound',
};
</script>
<template>
  <div class="card card-body">
    <h2>404 NotFound</h2>
    <p>요청 경로 : {{ $route.fullPath }}</p>
  </div>
</template>
