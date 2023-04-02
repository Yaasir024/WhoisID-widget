<script setup>
import { useVerificationStore } from "~~/stores/verification";

const useVerification = useVerificationStore();
</script>

<template>
    <main class="">
        <SectionStart v-if="useVerification.currentSection == 'start'" />
        <SectionPhone v-if="useVerification.currentSection == 'phone'" />
    </main>
</template>