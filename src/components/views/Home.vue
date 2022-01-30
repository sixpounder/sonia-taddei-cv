<template>
  <main class="md:container mx-4 md:mx-auto">
    <Header />
    <ProfessionalSummary class="mb-16" />

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
        <Software />
        <Languages />
      </template>
    </MainLayout>
    <Footer />
  </main>
</template>

<script lang="ts">
import MainLayout from '../layouts/MainLayout.vue'
import Header from '../partials/Header.vue'
import PersonalInfo from '../partials/PersonalInfo.vue'
import Contacts from '../partials/Contacts.vue'
import ProfessionalSummary from '../partials/ProfessionalSummary.vue'
import ProfessionalExperience from '../partials/ProfessionalExperience.vue'
import Skills from '../partials/Skills.vue'
import Education from '../partials/Education.vue'
import Volunteering from '../partials/Volunteering.vue'
import Footer from '../widgets/Footer.vue'
import Languages from '../partials/Languages.vue'
import SoftSkills from '../partials/SoftSkills.vue'
import Publications from '../partials/Publications.vue'
import { defineComponent } from 'vue'
import Software from '../partials/Software.vue'

export default defineComponent({
  components: {
    MainLayout,
    Header,
    PersonalInfo,
    Contacts,
    ProfessionalSummary,
    ProfessionalExperience,
    Skills,
    Education,
    Volunteering,
    Footer,
    Languages,
    SoftSkills,
    Publications,
    Software
}
})
</script>
