<template>
    <section aria-label="Personal info">
        <SectionTitle>Personal info</SectionTitle>
        <div class="space-y-4 mt-4">
            <div>
                <SectionSubtitle>Date of birth</SectionSubtitle>
                <p>11/08/1984</p>
            </div>
            <div>
                <SectionSubtitle>Nationality</SectionSubtitle>
                <p>Italian</p>
            </div>
            <div>
                <SectionSubtitle>Gender</SectionSubtitle>
                <p>Female</p>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import SectionTitle from "../widgets/SectionTitle.vue";
import SectionSubtitle from "../widgets/SectionSubtitle.vue";
</script>