<template>
    <section aria-label="Personal info">
        <SectionTitle>Personal info</SectionTitle>
        <div
            role="list"
            class="mt-4 flex flex-wrap flex-col justify-start space-y-4"
        >
            <div role="listitem">
                <SectionSubtitle>Date of birth</SectionSubtitle>
                <p>11/08/1984</p>
            </div>
            <div role="listitem">
                <SectionSubtitle>Nationality</SectionSubtitle>
                <p>Italian</p>
            </div>
            <div role="listitem">
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
