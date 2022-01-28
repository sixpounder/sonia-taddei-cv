<script setup lang="ts">
import MainLayout from '@/components/layouts/MainLayout.vue'
import Header from '@/components/partials/Header.vue'
import PersonalInfo from '@/components/partials/PersonalInfo.vue'
import Contacts from '@/components/partials/Contacts.vue'
import ProfessionalSummary from '@/components/partials/ProfessionalSummary.vue'
import ProfessionalExperience from '@/components/partials/ProfessionalExperience.vue'

</script>

<template>
  <main class="lg:container mx-4 lg:mx-auto">
    <Header />
    <ProfessionalSummary class="mb-10" />

    <MainLayout>
      <template v-slot:left>
        <ProfessionalExperience />
      </template>
      <template v-slot:right>
        <PersonalInfo />
        <Contacts />
      </template>
    </MainLayout>
  </main>
</template>
