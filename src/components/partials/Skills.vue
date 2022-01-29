<template>
    <Timeline title="Skills" :events="events" />    
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import Timeline from '@/components/widgets/Timeline.vue'
import { makeEvents, TimelineEvent } from '../../lib/timeline';

const events = ref<TimelineEvent[]>(
  makeEvents([
    {
      date: 'Time management',
      points: [
        { title: 'Planning:', body: 'deadlines and objectives (Plan - Do - Check - Actscheme);' },
        { title: 'Team coordination', body: 'on projects (people and interdisciplinary work);' },
        { title: 'Multitasking;', body: '' },
        { title: 'Lists', body: 'create work maps and define timetables.' },
      ]
    },
    {
        date: 'Mental organization',
        points: [
            { title: 'Analyzing', body: 'the problems, to develop solutions. Be prepared in advance prevents most of the problems;' },
            { title: null, body: 'Need data to understand things. Perceptions can be misleading;' },
            { title: 'Keep tracks', body: 'of processes, discussions, ideas. They could turn useful at some point.' },
        ]
    },
    {
        date: 'Physical organization',
        points: [
            { title: 'Order:', body: 'working in an ordered environment (both physical and digital) helps to find the things you need when you need them;' },
            { title: 'Archive:', body: 'it is necessary to archive information properly;' },
            { title: 'Modules and samples:', body: 'when possible develop standards to be used.' }
        ]
    },
    {
        date: 'Communication',
        points: [
            { title: 'Appropriate choice of language', body: 'according to the audience;' },
            { title: 'Different means and instruments', body: 'to communicate: ability to choose between emails, texts, Whatsapps, phone calls or talking in person;' },
            { title: 'Public speaking', body: 'and presentations have to be clear and essential. It is mandatory to say only what is necessary (people get bored easily).' }
        ]
    },
    {
        date: 'People',
        points: [
            { title: 'Team work:', body: 'ability to deal with people and group dynamics;' },
            { title: 'Meditating skills:', body: 'able to report problems and requests and come up with solutions and compromises in agreement with all the involved parties;' },
            { title: 'Empathy:', body: 'there is a difference in putting yourself in someone else\'s shoes, and instead understanding what it means for them to be in their shoes (not everyone is like you!);' },
            { title: 'Leadership and responsibility:', body: 'guide people and understand common needs and requests, in order to make shared decisions among the involved parties. This involves taking responsibility for what you choose, and stand for it, whatever the outcome.' }
        ]
    },
    {
        date: 'Personal',
        points: [
            { title: 'Caring for other poeple\'s point of view:', body: 'People can be inspiring if you listen appropriately. Active listening is a huge help for growing, professionally and personally;' },
            { title: '', body: 'No personal prejudice of any kind.' },
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
