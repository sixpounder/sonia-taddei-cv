<template>
  <div role="presentation" class="layout-wrap">
    <div class="left-wrapper">
      <slot name="left"></slot>
    </div>
    <div class="right-wrapper break-words bg-slate-100 dark:bg-gray-800">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MainLayout'
})
</script>

<style lang="css" scoped>
  .layout-wrap {
    @apply relative mb-8 flex flex-col lg:flex-row;
    @apply lg:px-32;
  }

  .layout-wrap .left-wrapper {
      @apply relative flex-auto text-justify break-words space-y-8;
      @apply leading-6;
      @apply lg:mr-8;
  }

  .layout-wrap .right-wrapper {
      @apply flex-1 flex-shrink p-6 space-y-8 overflow-hidden;
      @apply mt-8 lg:mt-0;
      min-width: 25%;
      border-radius: .5rem;
  }

  @media print {
    .layout-wrap .left-wrapper {
      page-break-before: always;
      page-break-inside: auto;
      page-break-after: always;
    }

    .layout-wrap .right-wrapper {
      page-break-before: always;
      page-break-inside: auto;
    }
  }
</style>
