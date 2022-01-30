<template>
    <li :data-date="modelValue.date ?? ''" class="entry">
        <small v-if="modelValue.date">{{ modelValue.date }}</small>
        <h3>{{ modelValue.title }}</h3>
        <h4>{{ modelValue.subtitle }}</h4>
        <p>{{ modelValue.body }}</p>
        
        <ul v-if="modelValue.points.length">
          <li v-for="point in modelValue.points">
            <i class="underline mr-2" v-if="point.title">{{ point.title }}</i>
            <span>{{ point.body }}</span>
          </li>
        </ul>

        <a v-if="modelValue.link" target="noopener" :href="modelValue.link.href">{{ modelValue.link.label }}</a>
        <slot></slot>
    </li>
</template>

<script lang="ts" setup>
import { isString } from "lodash-es";
import { computed, PropType } from "vue"
import { TimelineEvent } from "../../lib/timeline";

const props = defineProps({
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
  @apply text-xl lg:text-2xl font-bold my-2;
}

.entry h4 {
  @apply text-xl font-light my-2;
}

.entry::before {
    @apply hidden absolute lg:block text-right font-extralight uppercase text-sm;
    left: -240px;
    width: 150px;
    word-wrap: initial;
    top: calc(50% - 1rem);
    content: attr(data-date);
}

@screen lg {
  .entry::before {
    left: -200px;
    width: 100px;
  }
}

@screen xl {
  .entry::before {
    left: -240px;
    width: 140px;
  }
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
