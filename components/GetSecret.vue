<script setup lang="ts">
const { data } = await useFetch("/api/secret");
</script>

<template>
  <pre>{{ data }}</pre>
</template>
