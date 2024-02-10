<template>
  <div>
    <p>{{ count }} doubled is {{ doubleCount }}</p>
    <p>{{ name }}</p>
    <button @click="increment()">Increment</button>
  </div>
</template>

<script setup lang="ts">
const counterStore = useCounterStore();
const { count, name, doubleCount } = storeToRefs(counterStore);
const { increment } = counterStore;
</script>
