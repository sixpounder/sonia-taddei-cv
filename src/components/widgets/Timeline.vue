<template>
    <div class="timeline-wrap">
        <h2 v-if="title">{{ title }}</h2>
        <ul class="timeline">
            <TimelineEntry v-for="event in events" :key="event.createdAt.toString()" :modelValue="event"/>
        </ul>
    </div>
</template>

<script lang="ts" setup>
import { PropType } from "vue"
import { TimelineEvent } from "../../lib/timeline";
import TimelineEntry from './TimelineEntry.vue';

defineProps({
    title: {
        type: String,
        required: false
    },
    events: {
        type: Array as PropType<TimelineEvent[]>
    }
})
</script>

<style scoped>
.timeline-wrap {
    @apply list-none relative block border-l-cyan-700 border-l-4;
    @apply bg-slate-100 dark:bg-gray-800;
    @apply p-10 pl-16 pr-16 ml-0 mr-0;
    border-bottom-right-radius: .5rem;
    border-top-right-radius: .5rem;
}

.timeline-wrap h2 {
    @apply text-center lg:text-left text-3xl lg:text-5xl font-bold block pb-8 text-slate-500 dark:text-gray-400;
    @apply border-b border-b-gray-500;
    border-bottom-style: dashed;
    white-space: normal;
}

@media print {
    .timeline-wrap {
        page-break-inside: avoid;
        page-break-after: always;
    }
}
</style>

<style lang="css">
.timeline .entry:not(:last-child) {
    @apply border-b border-b-gray-500;
    border-bottom-style: dashed;
}
</style>
