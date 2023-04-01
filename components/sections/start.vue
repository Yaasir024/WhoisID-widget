<script setup>
import { useVerificationStore } from "@/stores/verification";

const useVerification = useVerificationStore();

const checked = ref(false);

const privacy = ref(false);

const startVerification = () => {
  if (checked.value) {
    useVerification.currentSection = "1";
  }
};
</script>

<template>
  <section class="bg-white py-[22px] h-full">
    <div class="flex items-center px-[18px]">
      <img src="@/assets/logo/icon.svg" alt="" class="mr-[8px]" />
      <span class="text-[14px] leading-[25px] text-id-green-2 font-medium"
        >WhoisID.Africa</span
      >
    </div>
    <div class="px-[33px] mb-[100px]">
      <div class="mt-[46px]">
        <img
          src="@/assets/images/start.png"
          alt=""
          class="w-[300px] h-[300px] mx-auto"
        />
      </div>
      <div class="mt-[25px] flex items-center justify-center">
        <h2
          class="text-[16px] leading-[29px] text-center text-id-primary font-medium max-w-[295px]"
        >
          Before you begin the verification process, kindly:
        </h2>
      </div>
      <div class="mt-[16px]">
        <ul class="">
          <li class="flex items-center">
            <img src="@/assets/images/check.svg" alt="" class="mr-[8px]" />
            <h4 class="text-[14px] leading-[25px]">
              Get ready to take a clear selfie.
            </h4>
          </li>
          <li class="flex items-center mt-[16px]">
            <img src="@/assets/images/check.svg" alt="" class="mr-[8px]" />
            <h4 class="text-[14px] leading-[25px]">
              Ensure you have a supporting document (e.g. utility bill, waste
              bill, bank statement) at hand.
            </h4>
          </li>
          <li class="flex items-center mt-[16px]">
            <img src="@/assets/images/check.svg" alt="" class="mr-[8px]" />
            <h4 class="text-[14px] leading-[25px]">
              Get ready to take a photo of the building you are located in.
            </h4>
          </li>
        </ul>
      </div>
      <div class="mt-[32px] flex items-center">
        <ReuseableCheckbox @clicked="checked = !checked" :checked="checked" />
        <h4 class="text-[14px] leading-[24px] text-id-gray-1 ml-[8px]">
          I agree to WhoisID
          <span
            class="text-id-green-2 font-semibold cursor-pointer"
            @click="privacy = !privacy"
            >Privacy Policy
          </span>
          <div class="overlay fixed bottom-0 left-0 right-0 top-0  z-[25]" v-if="privacy"></div>
          <transition name="privacy">
            <ModalPrivacy v-if="privacy" @close="privacy = false" />
          </transition>
        </h4>
      </div>
      <div class="mt-[32px] mb-[55px]">
        <ReuseableButton
          text="Start verification"
          :checked="checked"
          @click="startVerification()"
        />
      </div>
    </div>
    <SectionsFooter />
  </section>
</template>

<style scoped>
.overlay {
  background: rgba(52, 64, 84, 0.5);
}

/* Nav Animation */
.privacy-enter-active,
.privacy-leave-active {
  transition: all 0.4s ease;
}
.privacy-enter-from,
.privacy-leave-to {
  opacity: 0;
  transform: translateY(100%);
}
</style>
