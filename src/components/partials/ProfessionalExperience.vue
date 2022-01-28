<template>
    <Timeline title="Professional Experience" :events="events" />    
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import Timeline from '@/components/widgets/Timeline.vue'
import { makeEvents, TimelineEvent } from '../../lib/timeline';

const events = ref<TimelineEvent[]>(
  makeEvents([
    {
      date: 'June 2019 – Present',
      title: 'Quality Manager',
      subtitle: 'ITLA S.p.A.',
      body: 'ITLA is a third party company, working in laser cutting, bending and welding of metal parts',
      points: [
        'managing, analysis and solutions of product non conformities. Direct dealing with clients as KION Group, Hyster Yale',
        'definition of KPI from measuring performances, and statistical analysis of production data',
        'development of production processes, with the main focus on product engineering and tolerances',
        'Development of control tools on the ERP',
        'in-depth analysis on production processes in terms of UNI standards, for continuous improvement',
      ]
    },
    {
        date: 'May 2016 - June 2019',
        title: 'Mechanical engineer & spare parts warehouse manager',
        subtitle: 'RCR Cristalleria Italiana',
        body: 'RCR is a glass manufacturing company for tableware products.',
        points: [
            'mechanical design for glass manufacturing industry. Design and realization of the new furnace and related production lines.',
            'spare parts warehouse management: analysis and management of stocks in terms of new methods on the ERP and needed quantities.',
            'statistical analysis of production data; machines and plant system maintenance analysis.',
        ]
    }
  ])
)
</script>

<style scoped>
h2 {
    @apply text-2xl font-bold;
}
</style>
