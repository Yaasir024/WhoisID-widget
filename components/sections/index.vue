<script setup>
import { useVerificationStore } from "~~/stores/verification";

const useVerification = useVerificationStore()
</script>

<template>
  <main class="">
    <div class="overflow-y-scroll relative">
      <div class="max-w-[430px] w-full mx-auto h-screen">
        <SectionsStart v-if="useVerification.currentSection == 'start'"/>
        <Sections01 v-if="useVerification.currentSection == '1'"/>
        <SectionsSelfie v-if="useVerification.currentSection == 'selfie'"/>
        <SectionsSelfieRegistered v-if="useVerification.currentSection == 'selfie-registered'"/>
        <SectionsSelfieFailed v-if="useVerification.currentSection == 'selfie-failed'"/>
        <SectionsAddress v-if="useVerification.currentSection == 'address'"/>
      </div>
    </div>
  </main>
</template>
