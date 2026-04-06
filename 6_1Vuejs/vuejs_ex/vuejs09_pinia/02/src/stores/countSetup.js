import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useCountSetupStore = defineStore('countSetup', () => {
  const num = ref(10);
  const json = ref(null);

  const increment = () => {
    num.value++;
  };

  const getJson = async (url) => {
    increment();
    const response = await fetch(url);
    const data = await response.json();
    json.value = data;
  };

  const doubleNum = computed(() => num.value * 2);
  const doubleNumPlusOne = computed(() => doubleNum.value + 1);

  return { num, doubleNum, doubleNumPlusOne, json, increment, getJson };
});
