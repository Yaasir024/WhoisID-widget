<script setup>
import { useVerificationStore } from "@/stores/verification";

const useVerification = useVerificationStore();


const verify = () => {};

const prev = () => {
  useVerification.nextSection("building-capture");
  // useVerification.data.country = "";
  // useVerification.data.phone = "";
};
const recapture = (i) => {
  useVerification.nextSection(i);
}

const success = ref(false);
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
            <div class="h-full bg-id-green-2 w-full"></div>
            <div class="h-[10px] w-[10px] rounded-full bg-id-green-2"></div>
          </div>
        </div>
      </div>
      <div class="mt-[35px] px-[25px]">
        <h1 class="text-[16px] leading-[29px] text-id-dark-3 font-semibold">
          Review all fields and edit where necessary
        </h1>
        <div class="mt-[24px] pb-[12px] border-b border-[#EAECF0]">
          <div class="">
            <img :src="useVerification.data.images.building" alt="" class="w-full" />
          </div>
          
          <div class="mt-[12px] flex justify-center">
            <button
              class="flex items-center py-[8px] px-[16px] bg-[#F2F5FE] rounded-[32px] border border-id-green-2"
              @click="recapture('building-capture')"
            >
              <img src="@/assets/images/frame-2.svg" alt="" class="mr-[8px]" />
              <span class="text-[14px] leading-[25px] text-[#188084]"
                >Retake picture</span
              >
            </button>
          </div>
        </div>
        <div class="pt-[45px] pb-[24px] border-b border-[#EAECF0]">
          <div class="flex">
            <img
              :src="useVerification.data.images.selfie"
              alt=""
              class="h-[78px] w-[78px] rounded-full mr-[24px]"
            />
            <div class="">
              <h2
                class="text-[18px] leading-[32px] font-semibold text-[#212121] mb-[4px]"
              >
                Adeola Emmanuel
              </h2>
              <p class="text-[16px] leading-[22px] text-id-gray-1 mb-[4px]">
                +234 901 234 5678
              </p>
              <div class="flex items-center">
                <img
                  src="@/assets/images/ng-round.svg"
                  alt=""
                  class="mr-[8px]"
                />
                <span class="text-[16px] leading-[22px] text-id-gray-1"
                  >Nigeria</span
                >
              </div>
            </div>
          </div>
        </div>
        <div class="mt-[24px] pb-[24px] border-b border-[#EAECF0]">
          <div class="flex text-[16px] leading-[29px] text-id-gray-1 mb-[12px]" v-if="useVerification.data.address.landmark != ''">
            <div class="w-[128px] shrink-0">Landmark</div>
            <div class="w-full">{{ useVerification.data.address.landmark }}</div>
          </div>
          <div class="flex text-[16px] leading-[29px] text-id-gray-1 mb-[12px]" v-if="useVerification.data.address.full_address != ''">
            <div class="w-[128px] shrink-0">Full address</div>
            <div class="w-full">{{ useVerification.data.address.full_address }}</div>
          </div>
          <div class="flex text-[16px] leading-[29px] text-id-gray-1 mb-[12px]" v-if="useVerification.data.address.full_address != ''">
            <div class="w-[128px] shrink-0">Current address</div>
            <div class="w-full">{{ useVerification.data.address.full_address }}</div>
          </div>
          <div class="flex text-[16px] leading-[29px] text-id-gray-1 mb-[12px]" v-if="useVerification.data.address.reason != ''">
            <div class="w-[128px] shrink-0">Reason for change</div>
            <div class="w-full">{{ useVerification.data.address.reason }}</div>
          </div>
          <div class="flex text-[16px] leading-[29px] text-id-gray-1 mb-[12px]" v-if="useVerification.data.address.state != ''">
            <div class="w-[128px] shrink-0">State</div>
            <div class="w-full">{{ useVerification.data.address.state }}</div>
          </div>

          <div class="flex text-[16px] leading-[29px] text-id-gray-1 mb-[12px]" v-if="useVerification.data.address.alias != ''">
            <div class="w-[128px] shrink-0">Alias</div>
            <div class="w-full">{{ useVerification.data.address.alias }}</div>
          </div>
        </div>
        <div class="mt-[24px]">
          <h1 class="text-[16px] leading-[29px] tfont-semibold mb-[8px]">
            Utility bill
          </h1>
          <img :src="useVerification.data.images.utility" alt="" class="w-full" />
          <div class="mt-[12px] flex justify-center">
            <button
              class="flex items-center py-[8px] px-[16px] bg-[#F2F5FE] rounded-[32px] border border-id-green-2"
              @click="recapture('utility-capture')"
            >
              <img src="@/assets/images/frame-2.svg" alt="" class="mr-[8px]" />
              <span class="text-[14px] leading-[25px] text-[#188084]"
                >Recapture</span
              >
            </button>
          </div>
        </div>
        <div class="mt-[40px]">
          <ReuseableButton
            text="Submit for verification"
            :checked="true"
            @click="success = true"
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
        v-if="success"
      ></div>
      <transition name="success">
        <div
          class="fixed bottom-0 left-0 right-0 top-0 flex items-center justify-center z-30"
          v-if="success"
        >
          <div
            class="relative modal h-[390px] max-w-[430px] w-full bg-white mt-auto p-[32px] rounded-t-[32px] ml-[-14px] flex items-center flex-col"
          >
            <button class="absolute top-[20px] left-[20px]">
              <img
                src="@/assets/icon/close.svg"
                alt=""
                class=""
                @click="success = false"
              />
            </button>
            <img
              src="@/assets/images/success.png"
              alt=""
              class="h-[159px] w-[159px]"
            />
            <h2 class="text-[32px] leading-[58px] font-semibold mt-[16px]">
              Thank You
            </h2>
            <h2 class="text-[16px] leading-[29px] font-semibold mt-[8px]">
              Your details have been submitted
            </h2>
          </div>
        </div>
      </transition>
    </div>
  </section>
</template>

<style scoped>
.overlay {
  background: rgba(52, 64, 84, 0.5);
}

/* Nav Animation */
.success-enter-active,
.success-leave-active {
  transition: all 0.4s ease;
}
.success-enter-from,
.success-leave-to {
  opacity: 0;
  transform: translateY(100%);
}
</style>
