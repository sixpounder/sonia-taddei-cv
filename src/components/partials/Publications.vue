<template>
    <Timeline title="Publications" :events="events" />    
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import Timeline from '../widgets/Timeline.vue'
import { makeEvents, TimelineEvent } from '../../lib/timeline';

const events = ref<TimelineEvent[]>(
  makeEvents([
    {
        date: 'June 10, 2020',
        title: 'Wakes of wall-bounded turbulent flows past patches of circular cylinders',
        subtitle: 'Journal of Fluid Mechanics , Volume 892 , 10 June 2020, A37',
        link: {
          label: 'See publication',
          href: 'https://doi.org/10.1017/jfm.2020.102'
        }
    },
    {
        date: 'July 10, 2016',
        title: 'Characterisation of drag and wake properties of canopy patches immersed in turbulent boundary layers',
        subtitle: 'Journal of Fluid Mechanics, Volume 798, 10 July 2016 , pp. 27 - 49',
        link: {
          label: 'See publication',
          href: 'https://doi.org/10.1017/jfm.2016.312'
        }
    },
  ])
)
</script>

<style scoped>
h2 {
    @apply text-2xl font-bold;
}
</style>
