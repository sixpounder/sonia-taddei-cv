<template>
    <Timeline title="Education & Certificates" :events="events" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import Timeline from '@/components/widgets/Timeline.vue'
import { makeEvents, TimelineEvent } from '../../lib/timeline';

const events = ref<TimelineEvent[]>(
    makeEvents([
        {
            date: 'Sept. 2012 - Aug. 2016',
            title: 'PhD in Experimental Aerodynamics',
            subtitle: 'University of Southampton (UK)',
        },
        {
            date: 'Dec. 2007 - Oct. 2011',
            title: 'Master in Aerospace Engineering, Aerodynamics',
            subtitle: 'Università di Pisa (IT)',
        },
        {
            date: 'Oct. 2019',
            title: 'Management System Internal Auditor Certificate (ISO 9001)',
            subtitle: 'AENOR'
        },
        {
            date: 'May 2017',
            title: 'Master Lean Manufacturing for Lean Practitioner Certification',
            subtitle: 'Chiarini e Associati'
        }
    ])
)
</script>

<style scoped>
h2 {
    @apply text-2xl font-bold;
}
</style>
