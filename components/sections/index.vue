<script setup>
import { useVerificationStore } from "~~/stores/verification";

const useVerification = useVerificationStore();
</script>

<template>
  <main class="">
    <div class="overflow-y-auto relative">
      <div class="section sm:max-w-[430px] w-full mx-auto">
        <SectionsStart v-if="useVerification.currentSection == 'start'" />
        <Sections01 v-if="useVerification.currentSection == '1'" />
        <SectionsSelfie v-if="useVerification.currentSection == 'selfie'" />
        <SectionsSelfieRegistered
          v-if="useVerification.currentSection == 'selfie-registered'"
        />
        <SectionsSelfieFailed
          v-if="useVerification.currentSection == 'selfie-failed'"
        />
        <SectionsAddress v-if="useVerification.currentSection == 'address'" />
        <SectionsCaptureUtility
          v-if="useVerification.currentSection == 'utility-capture'"
        />
        <SectionsCaptureBuilding
          v-if="useVerification.currentSection == 'building-capture'"
        />
        <SectionsFinal v-if="useVerification.currentSection == 'final'" />
      </div>
    </div>
  </main>
</template>

<style scoped>
.section {
  height: calc(100vh - env(safe-area-inset-top));
}
</style>
