<template>
  <section aria-labelledby="software-title" id="soft-skills">
    <SectionTitle id="software-title">Software</SectionTitle>
    <div class="mt-4 space-y-4">
      <Skill :rating="5" dot-color="#0D9488">Microsoft Office</Skill>
      <Skill :rating="5" dot-color="#0D9488">Matlab</Skill>
      <Skill :rating="5" dot-color="#0D9488">Latex</Skill>
      <Skill :rating="4" dot-color="#0D9488">Catia V5</Skill>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SectionTitle from "../widgets/SectionTitle.vue";
import Skill from '../widgets/Skill.vue';

export default defineComponent({
  components: {
    SectionTitle,
    Skill,
  },
});
</script>
