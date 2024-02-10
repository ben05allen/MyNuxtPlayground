<template>
  <div>
    <p>{{ count }}</p>
  </div>
</template>

<script setup lang="ts">
const counterStore = useCounterStore();
const { count } = storeToRefs(counterStore);
</script>
