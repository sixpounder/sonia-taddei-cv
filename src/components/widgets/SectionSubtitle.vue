<template>
  <h4>
    <slot />
  </h4>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SectionSubtitle",
});
</script>

<style lang="css" scoped>
  h4 {
    @apply font-bold;
  }
</style>
