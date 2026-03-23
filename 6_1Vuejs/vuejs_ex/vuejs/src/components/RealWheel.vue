<script setup>
   import Tire from "./Tire.vue";

    const message = "Hello";
    const welcome = () => {
           window.alert(message);
    }
 </script>
<template>
  <div class="front-wheel">
        <span>Real-Wheel</span>
        <Tire color ="RED"/>
         </div>
</template>

<style scoped>
   .front-wheel{
     border : 1px solid BLACK;
     border-radius: 50%;
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     width: 150px;
     height: 150px;
   }

</style>