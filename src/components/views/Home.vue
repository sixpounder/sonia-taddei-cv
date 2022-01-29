<script setup lang="ts">
import MainLayout from '@/components/layouts/MainLayout.vue'
import Header from '@/components/partials/Header.vue'
import PersonalInfo from '@/components/partials/PersonalInfo.vue'
import Contacts from '@/components/partials/Contacts.vue'
import ProfessionalSummary from '@/components/partials/ProfessionalSummary.vue'
import ProfessionalExperience from '@/components/partials/ProfessionalExperience.vue'
import Skills from '../partials/Skills.vue'
import Education from '../partials/Education.vue'
import Volunteering from '../partials/Volunteering.vue'
import Footer from '../widgets/Footer.vue'
import Languages from '../partials/Languages.vue'
import SoftSkills from '../partials/SoftSkills.vue'
import Publications from '../partials/Publications.vue'

</script>

<template>
  <main class="lg:container mx-4 lg:mx-auto">
    <Header />
    <ProfessionalSummary class="mb-10" />

    <MainLayout>
      <template v-slot:left>
        <Education />
        <Publications />
        <ProfessionalExperience />
        <Skills />
        <Volunteering />
      </template>
      <template v-slot:right>
        <PersonalInfo />
        <Contacts />
        <SoftSkills />
        <Languages />
      </template>
    </MainLayout>
    <Footer />
  </main>
</template>
