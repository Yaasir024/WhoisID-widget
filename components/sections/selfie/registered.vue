<script setup>
const checked = ref(false);

const privacy = ref(false);
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
            <div class="h-full bg-id-green-2 w-[22%]"></div>
            <div class="h-[10px] w-[10px] rounded-full bg-id-green-2"></div>
          </div>
        </div>
      </div>
      <div class="mt-[35px] px-[25px]">
        <h1 class="text-[16px] leading-[29px] text-id-dark-3 font-semibold">
          Take a selfie
        </h1>
        <div class="mt-[24px]">
          <div class="flex justify-center">
            <img
              src="@/assets/images/selfie.png"
              alt=""
              class="h-[280px]"
            />
          </div>
          <div class="mt-[32px] flex justify-center">
            <button
              class="flex items-center py-[8px] px-[16px] bg-[#F2F5FE] rounded-[32px]"
            >
              <img src="@/assets/icon/check.svg" alt="" class="mr-[8px]" />
              <span class="text-[14px] leading-[25px] text-[#2E2C34]"
                >Selfie registered</span
              >
            </button>
          </div>
        </div>
        <div class="mt-[40px] flex items-center justify-between">
          <button
            class="text-id-green-2 text-[18px] leading-[32px] font-semibold py-[10px] px-[36px] rounded-[48px] border border-id-green-2"
          >
            Retake selfie
          </button>
          <button
            class="bg-id-green-2 text-[#F2F4F7] text-[18px] leading-[32px] font-semibold py-[10px] px-[36px] rounded-[48px] border border-id-green-2"
          >
            Use this one
          </button>
        </div>
      </div>
    </div>
    <SectionsFooter />
  </section>
</template>

<style scoped>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>
