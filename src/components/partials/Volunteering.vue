<template>
    <Timeline title="Volunteering" :events="events" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import Timeline from '@/components/widgets/Timeline.vue'
import { makeEvents, TimelineEvent } from '../../lib/timeline';

const events = ref<TimelineEvent[]>(
    makeEvents([
        {
            date: 'July 2020 - ongoing',
            title: 'Vice-president of sport center GSD Quercegrossa',
            subtitle: 'Castelnuovo B.Ga (IT)',
        }
    ])
)
</script>

<style scoped>
h2 {
    @apply text-2xl font-bold;
}
</style>
