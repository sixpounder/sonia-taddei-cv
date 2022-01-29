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
    @apply text-xl lg:text-2xl pb-2 font-bold border-b text-slate-500 dark:text-gray-400 border-slate-300 dark:border-gray-700;
  }
</style>
