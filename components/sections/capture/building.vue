<script setup>
import { useVerificationStore } from "@/stores/verification";

const useVerification = useVerificationStore();

const successModal = ref(false);
const next = () => {
    capture.value = false
  useVerification.nextSection("final");
  //   if (
  //     (useVerification.data.country != "") &
  //     (useVerification.data.phone != "")
  //   ) {
  //     useVerification.nextSection("selfie");
  //   }
};

const prev = () => {
  useVerification.nextSection("utility-capture");
  // useVerification.data.country = "";
  // useVerification.data.phone = "";
};

const capture = ref(false);

const snap = () => {
    next()
}
</script>

<template>
  <section
    class="bg-white py-[22px] min-h-screen flex flex-col justify-between"
  >
    <div class="">
      <div class="flex items-center px-[18px]">
        <img src="@/assets/logo/icon.svg" alt="" class="mr-[8px]" />
        <span class="text-[20px] leading-[36px] font-semibold"
          >WhoisID.Africa</span
        >
      </div>
      <div class="mt-[25px] px-[17px]">
        <div class="w-full h-[4px] bg-[#EAECF0]">
          <div class="flex items-center z-10 w-full h-full">
            <div class="h-full bg-id-green-2 w-[85%]"></div>
            <div class="h-[10px] w-[10px] rounded-full bg-id-green-2"></div>
          </div>
        </div>
      </div>
      <div class="mt-[35px] px-[25px]">
        <h1 class="text-[16px] leading-[29px] text-id-dark-3 font-semibold">
            Take a front image of your bulding
        </h1>
        <div class="mt-[24px] pb-[12px]">
          <div class="">
            <img src="@/assets/images/house.png" alt="" class="" />
          </div>
          <div class="mt-[18px] flex justify-center">
            <button
              class="flex items-center "
            >
              <img src="@/assets/icon/light-bulb.svg" alt="" class="mr-[8px]" />
              <span class="text-[14px] leading-[25px] font-medium text-[#263238]"
                >A sample image of  a building</span
              >
            </button>
          </div>
        </div>
        <div class="mt-[40px]">
          <ReuseableButton
            text="Continue"
            :checked="true"
            @click="capture = true"
          />
          <div class="flex justify-center w-full mt-[10px]">
            <button class="flex items-center" @click="prev()">
              <img
                src="@/assets/images/arrow-left.svg"
                alt=""
                class="mr-[4px]"
              />
              <span
                class="text-[21px] leading-[38px] font-medium text-[#188A8E]"
                >Back</span
              >
            </button>
          </div>
        </div>
      </div>
    </div>
    <SectionsFooter />

    <div class="">
      <div
        class="overlay fixed bottom-0 left-0 right-0 top-0 z-[25]"
        v-if="capture"
      ></div>
      <transition name="modal">
        <SectionsCaptureBuildingcam v-if="capture" @close="capture = false" @next="next()"/>
      </transition>
    </div>
  </section>
</template>

<style scoped>
.modal {
    height: calc(100vh - 48px);
}
.overlay {
  background: rgba(52, 64, 84, 0.5);
}

/* Nav Animation */
.modal-enter-active,
.modal-leave-active {
  transition: all 0.4s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: translateY(100%);
}
</style>
