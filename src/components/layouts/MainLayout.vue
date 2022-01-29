<template>
  <div role="presentation" class="layout-wrap flex flex-col-reverse lg:flex-row">
    <div class="left-wrapper">
      <slot name="left" />
    </div>
    <div class="right-wrapper break-words bg-slate-100 dark:bg-gray-800">
      <slot name="right" />
    </div>
  </div>
</template>

<style lang="css" scoped>
  .layout-wrap {
    @apply relative mb-8;
    @apply lg:px-32;
  }

  .layout-wrap .left-wrapper {
      @apply relative flex-auto text-justify break-words space-y-8;
      @apply leading-6;
  }

  .layout-wrap .right-wrapper {
      @apply flex-1 flex-shrink p-6 space-y-8;
      min-width: 25%;
      border-radius: .5rem;
  }
</style>

<style scoped>
    .left-wrapper {
        @apply lg:mr-8;
        @apply mt-8 lg:mt-0;
    }
</style>
