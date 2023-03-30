<script setup>

import {useCounterStore} from '@/stores/counter'
const checked = ref(false);

const privacy = ref(false);

const store = useCounterStore()
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
            <div class="h-full bg-id-green-2 w-[60%]"></div>
            <div class="h-[10px] w-[10px] rounded-full bg-id-green-2"></div>
          </div>
        </div>
      </div>
      <div class="mt-[35px] px-[25px]">
        <h4 class="text-[16px] leading-[29px] text-id-dark-3 font-medium">
          Good morning,
        </h4>
        <h2 class="text-[22px] leading-[35px] text-id-dark-3 font-semibold">
          Adeola Emmanuel
        </h2>
        <div class="mt-[24px]">
          <div class="fields">
            <div class="flex flex-col cursor-pointer">
              <span
                class="text-[16px] leading-[29px] text-[#667085] font-medium mb-[8px]"
                >Country</span
              >
              <div class="">
                <div
                  class="flex items-center justify-between h-[48px] w-full px-[14px] border border-[#D0D5DD] bg-[#D0D5DD] rounded-lg"
                >
                  <span class="text-[14px] leading-[25px] text-[#6D6D6D]"
                    >13, Shogunle street, Idiaraba, Lagos state.</span
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="fields mt-[24px]">
            <div class="flex flex-col">
              <span
                class="text-[16px] leading-[29px] text-[#667085] font-medium mb-[8px]"
                >Do you still live at this address?</span
              >
              <div class="relative">
                <div
                  class="flex items-center justify-between h-[48px] w-full px-[14px] border border-[#D0D5DD] rounded-lg"
                >
                  <span class="text-[14px] leading-[25px] text-[#D0D5DD]"
                    >Select a response</span
                  >
                  <img src="@/assets/icon/dropdown.svg" alt="" class="" />
                </div>
                <div
                  class="absolute top-[50px] left-[0px] bg-white shadow-xl w-full rounded-lg overflow-hidden z-20"
                  v-if="false"
                >
                  <div
                    class="py-[10px] px-[16px] hover:bg-[#D0D5DD] transition-all duration-200 ease-in-out"
                  >
                    Yes
                  </div>
                  <div
                    class="py-[10px] px-[16px] hover:bg-[#D0D5DD] transition-all duration-200 ease-in-out"
                  >
                    No
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- USER LIVING IN THE SAME ADDRESS -->
        <div class="mt-[24px]" v-if="false">
          <div class="fields">
            <div class="flex flex-col cursor-pointer">
              <span
                class="text-[16px] leading-[29px] text-[#667085] font-medium mb-[8px]"
                >Address landmark</span
              >
              <div class="">
                <div
                  class="flex items-center justify-between h-[48px] w-full px-[14px] border border-[#D0D5DD] rounded-lg"
                >
                  <input
                    type="text"
                    placeholder="Enter landmark"
                    class="w-full outline-none"
                  />
                </div>
              </div>
              <div class="mt-[8px] flex items-center">
                <img src="@/assets/icon/q-mark.svg" alt="" class="mr-[5px]" />
                <span class="text-id-gray-2 text-[12px] leading-[22px]"
                  >A recognizable building or place at your address.</span
                >
              </div>
            </div>
          </div>
          <div class="fields mt-[24px]">
            <div class="flex flex-col cursor-pointer">
              <span
                class="text-[16px] leading-[29px] text-[#667085] font-medium mb-[8px]"
                >Alias</span
              >
              <div class="">
                <div
                  class="flex items-center justify-between h-[48px] w-full px-[14px] border border-[#D0D5DD] rounded-lg"
                >
                  <input
                    type="text"
                    placeholder="e.g Chief Adeola"
                    class="w-full outline-none"
                  />
                </div>
              </div>
              <div class="mt-[8px] flex items-center">
                <img src="@/assets/icon/q-mark.svg" alt="" class="mr-[5px]" />
                <span class="text-id-gray-2 text-[12px] leading-[22px]"
                  >Enter the name you are known as in your environment</span
                >
              </div>
            </div>
          </div>
        </div>
        <!-- USER’S ADDRESS CHANGED -->
        <div class="mt-[24px]">
          <div class="fields mt-[24px]">
            <div class="flex flex-col">
              <span
                class="text-[16px] leading-[29px] text-[#667085] font-medium mb-[8px]"
                >Reason for change</span
              >
              <div class="relative">
                <div
                  class="flex items-center justify-between h-[48px] w-full px-[14px] border border-[#D0D5DD] rounded-lg"
                >
                  <span class="text-[14px] leading-[25px] text-[#D0D5DD]"
                    >Relocation</span
                  >
                  <img src="@/assets/icon/dropdown.svg" alt="" class="" />
                </div>
                <div
                  class="absolute top-[50px] left-[0px] bg-white shadow-xl w-full rounded-lg overflow-hidden z-20"
                  v-if="false"
                >
                  <div
                    class="py-[10px] px-[16px] hover:bg-[#D0D5DD] transition-all duration-200 ease-in-out"
                  >
                    Incomplete address
                  </div>
                  <div
                    class="py-[10px] px-[16px] hover:bg-[#D0D5DD] transition-all duration-200 ease-in-out"
                  >
                    Never lived in the address
                  </div>
                  <div
                    class="py-[10px] px-[16px] hover:bg-[#D0D5DD] transition-all duration-200 ease-in-out"
                  >
                    Relocation
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--  -->
          <div class="fields mt-[24px]">
            <div class="flex flex-col cursor-pointer">
              <span
                class="text-[16px] leading-[29px] text-[#667085] font-medium mb-[8px]"
                >Full Address</span
              >
              <div class="">
                <div
                  class="flex items-center justify-between h-[48px] w-full px-[14px] border border-[#D0D5DD] rounded-lg"
                >
                  <input
                    type="text"
                    placeholder="8, Yaba street, Oregun, Ikeja"
                    class="w-full outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
          <!--  -->
          <div class="fields mt-[24px]">
            <div class="flex flex-col">
              <span
                class="text-[16px] leading-[29px] text-[#667085] font-medium mb-[8px]"
                >State</span
              >
              <div class="relative">
                <div
                  class="flex items-center justify-between h-[48px] w-full px-[14px] border border-[#D0D5DD] rounded-lg"
                >
                  <span class="text-[14px] leading-[25px] text-[#D0D5DD]"
                    >Lagos</span
                  >
                  <img src="@/assets/icon/dropdown.svg" alt="" class="" />
                </div>
                <div
                  class="absolute top-[50px] left-[0px] bg-white shadow-xl w-full rounded-lg overflow-hidden z-20"
                  v-if="false"
                >
                  <div
                    class="py-[10px] px-[16px] hover:bg-[#D0D5DD] transition-all duration-200 ease-in-out"
                  >
                    Incomplete address
                  </div>
                  <div
                    class="py-[10px] px-[16px] hover:bg-[#D0D5DD] transition-all duration-200 ease-in-out"
                  >
                    Never lived in the address
                  </div>
                  <div
                    class="py-[10px] px-[16px] hover:bg-[#D0D5DD] transition-all duration-200 ease-in-out"
                  >
                    Relocation
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--  -->
          <div class="fields mt-[24px]">
            <div class="flex flex-col cursor-pointer">
              <span
                class="text-[16px] leading-[29px] text-[#667085] font-medium mb-[8px]"
                >LGA</span
              >
              <div class="">
                <div
                  class="flex items-center justify-between h-[48px] w-full px-[14px] border border-[#D0D5DD] rounded-lg"
                >
                  <input
                    type="text"
                    placeholder="Ikeja"
                    class="w-full outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
          <!--  -->
          <div class="fields mt-[24px]">
            <div class="flex flex-col cursor-pointer">
              <span
                class="text-[16px] leading-[29px] text-[#667085] font-medium mb-[8px]"
                >Address landmark</span
              >
              <div class="">
                <div
                  class="flex items-center justify-between h-[48px] w-full px-[14px] border border-[#D0D5DD] rounded-lg"
                >
                  <input
                    type="text"
                    placeholder="Enter landmark"
                    class="w-full outline-none"
                  />
                </div>
              </div>
              <div class="mt-[8px] flex items-center">
                <img src="@/assets/icon/q-mark.svg" alt="" class="mr-[5px]" />
                <span class="text-id-gray-2 text-[12px] leading-[22px]"
                  >A recognizable building or place at your address.</span
                >
              </div>
            </div>
          </div>
          <!--  -->
          <div class="fields mt-[24px]">
            <div class="flex flex-col">
              <span
                class="text-[16px] leading-[29px] text-[#667085] font-medium mb-[8px]"
                >How long have you lived at this address?</span
              >
              <div class="relative">
                <div
                  class="flex items-center justify-between h-[48px] w-full px-[14px] border border-[#D0D5DD] rounded-lg"
                >
                  <span class="text-[14px] leading-[25px] text-[#D0D5DD]"
                    >Less than three months</span
                  >
                  <img src="@/assets/icon/dropdown.svg" alt="" class="" />
                </div>
                <div
                  class="absolute top-[50px] left-[0px] bg-white shadow-xl w-full rounded-lg overflow-hidden z-20"
                  v-if="false"
                >
                  <div
                    class="py-[10px] px-[16px] hover:bg-[#D0D5DD] transition-all duration-200 ease-in-out"
                  >
                    Incomplete address
                  </div>
                  <div
                    class="py-[10px] px-[16px] hover:bg-[#D0D5DD] transition-all duration-200 ease-in-out"
                  >
                    Never lived in the address
                  </div>
                  <div
                    class="py-[10px] px-[16px] hover:bg-[#D0D5DD] transition-all duration-200 ease-in-out"
                  >
                    Relocation
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--  -->
          <div class="fields mt-[24px]">
            <div class="flex flex-col cursor-pointer">
              <span
                class="text-[16px] leading-[29px] text-[#667085] font-medium mb-[8px]"
                >Alias</span
              >
              <div class="">
                <div
                  class="flex items-center justify-between h-[48px] w-full px-[14px] border border-[#D0D5DD] rounded-lg"
                >
                  <input
                    type="text"
                    placeholder="e.g Chief Adeola"
                    class="w-full outline-none"
                  />
                </div>
              </div>
              <div class="mt-[8px] flex items-center">
                <img src="@/assets/icon/q-mark.svg" alt="" class="mr-[5px]" />
                <span class="text-id-gray-2 text-[12px] leading-[22px]"
                  >Enter the name you are known as in your environment</span
                >
              </div>
            </div>
          </div>
        </div>
        <div class="mt-[56px]">
          <ReuseableButton text="Continue" :checked="true" />
          <div class="flex justify-center w-full mt-[10px]">
            <button class="flex items-center">
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
