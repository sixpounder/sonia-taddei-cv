<template>
  <section id="contacts" aria-labelledby="contacts-section">
    <SectionTitle id="contacts-section">Contacts</SectionTitle>
    <div
      role="list"
      class="mt-4 flex flex-wrap flex-col justify-start space-y-4"
    >
      <div role="listitem">
        <SectionSubtitle> Phone </SectionSubtitle>
        <p>(+39) 3335266492</p>
      </div>
      <div role="listitem">
        <SectionSubtitle> Email </SectionSubtitle>
        <Email address="taddeisonia84@gmail.com" class="lg:break-all" />
      </div>
      <div role="listitem">
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
