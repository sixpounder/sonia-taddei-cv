<template>
  <section id="contacts" aria-label="Contacts">
    <SectionTitle>Contact</SectionTitle>
    <div class="space-y-4 mt-4">
      <div>
        <SectionSubtitle> Phone </SectionSubtitle>
        <p>(+39) 3335266492</p>
      </div>
      <div>
        <SectionSubtitle> Email </SectionSubtitle>
        <Email address="taddeisonia84@gmail.com" />
      </div>
      <div>
        <SectionSubtitle> Skype </SectionSubtitle>
        <p>sonia.taddei</p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SectionTitle from "../widgets/SectionTitle.vue";
import SectionSubtitle from "../widgets/SectionSubtitle.vue";
import Email from "../widgets/Email.vue";

export default defineComponent({
  components: {
    SectionTitle,
    SectionSubtitle,
    Email,
  },
});
</script>
