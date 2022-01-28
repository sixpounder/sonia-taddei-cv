<template>
    <li :data-date="modelValue.date" class="entry">
        <small>{{ modelValue.date }}</small>
        <h3>{{ modelValue.title }}</h3>
        <h4>{{ modelValue.subtitle }}</h4>
        <p>{{ modelValue.body }}</p>
        
        <ul v-if="modelValue.points.length">
          <li v-for="point in modelValue.points" :key="point">
            {{ point }}
          </li>
        </ul>
    </li>
</template>

<script lang="ts" setup>
import { PropType } from "vue"
import { TimelineEvent } from "../../lib/timeline";

defineProps({
  modelValue: {
    type: Object as PropType<TimelineEvent>,
    required: true,
  }
});
</script>

<style lang="css" scoped>
.entry {
    @apply pb-10 pt-10;
    position: relative;
}

.entry small {
    @apply block lg:hidden text-sm;
}

.entry h3 {
  @apply text-2xl font-bold my-2;
}

.entry h4 {
  @apply text-xl font-light my-2;
}

.entry::before {
    @apply hidden absolute lg:block text-right font-extralight uppercase text-sm;
    left: -240px;
    max-width: 150px;
    word-wrap: break-word;
    top: calc(50% - 1rem);
    content: attr(data-date);
}

.entry::after {
    @apply absolute block bg-white dark:bg-gray-900;
    box-shadow: 0 0 0 4px #0e7490;
    left: -71.5px;
    border-radius: 50%;
    height: 11px;
    width: 11px;
    content: "";
    top: calc(50% - 11px);
}

.entry ul {
  @apply mt-2 list-disc lowercase;
}

.entry ul li::first-letter {
  @apply uppercase;
}
</style>
