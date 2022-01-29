<template>
    <Timeline title="Publications" :events="events" />    
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import Timeline from '@/components/widgets/Timeline.vue'
import { makeEvents, TimelineEvent } from '../../lib/timeline';

const events = ref<TimelineEvent[]>(
  makeEvents([
    {
    date: 'July 10, 2016',
    title: 'Characterisation of drag and wake properties of canopy patches immersed in turbulent boundary layers',
    subtitle: 'Journal of Fluid Mechanics, Volume 798, 10 July 2016 , pp. 27 - 49'
    },
    {
      date: 'June 10, 2020',
      title: 'Wakes of wall-bounded turbulent flows past patches of circular cylinders',
      subtitle: 'Journal of Fluid Mechanics , Volume 892 , 10 June 2020, A37'
    },
  ])
)
</script>

<style scoped>
h2 {
    @apply text-2xl font-bold;
}
</style>
