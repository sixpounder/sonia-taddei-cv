<template>
  <h3>
    <slot />
  </h3>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SectionTitle",
});
</script>

<style lang="css" scoped>
  h3 {
    @apply text-3xl pb-2 font-bold border-b border-slate-300 dark:border-gray-700;
  }
</style>
