export const useCounterStore = defineStore("counter", () => {
  const count = ref(1);
  const name = ref("Mary");
  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++;
  }

  return { count, name, doubleCount, increment };
});
