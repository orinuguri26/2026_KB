<script setup>
   const props = defineProps( {
       color : String
   }
   );

</script>

<template>
   <div :style="{color : props.color}"> {{props.color || 'BLACK'}} Tire </div>

</template>