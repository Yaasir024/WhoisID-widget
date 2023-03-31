<script setup>
import { useVerificationStore } from "@/stores/verification";

const useVerification = useVerificationStore();

const liveAtDropdown = ref(null);
const showLiveAtDropdown = ref(false);

useClickOutside(liveAtDropdown, () => {
  showLiveAtDropdown.value = false;
});

const addLiveAt = (i) => {
  useVerification.data.address.still_live_at = i;
  showLiveAtDropdown.value = false;
};

// REASON
const reasonDropdown = ref(null);
const showReasonDropdown = ref(false);

useClickOutside(reasonDropdown, () => {
  showReasonDropdown.value = false;
});
const addReason = (i) => {
  useVerification.data.address.reason = i;
  showReasonDropdown.value = false;
};
// STATE
const stateDropdown = ref(null);
const showStateDropdown = ref(false);

useClickOutside(stateDropdown, () => {
  showStateDropdown.value = false;
});
const addState = (i) => {
  useVerification.data.address.state = i;
  showStateDropdown.value = false;
};
// LENGTH
const lengthDropdown = ref(null);
const showLengthDropdown = ref(false);

useClickOutside(lengthDropdown, () => {
  showLengthDropdown.value = false;
});
const addlength = (i) => {
  useVerification.data.address.length_of_living = i;
  showLengthDropdown.value = false;
};
const next = () => {
  useVerification.nextSection("utility-capture");
  //   if (
  //     (useVerification.data.country != "") &
  //     (useVerification.data.phone != "")
  //   ) {
  //     useVerification.nextSection("selfie");
  //   }
};
const prev = () => {
  useVerification.nextSection("selfie-registered");
  useVerification.data.address = {
    still_live_at: "",
    reason: "relocation",
    full_address: "",
    state: "",
    lga: "",
    landmark: "",
    length_of_living: "",
    alias: "",
  };
};
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
            <div class="h-full bg-id-green-2 w-[50%]"></div>
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
                >Full address</span
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
          <!--  -->
          <div class="fields mt-[24px]">
            <div class="flex flex-col">
              <span
                class="text-[16px] leading-[29px] text-[#667085] font-medium mb-[8px]"
                >Do you still live at this address?</span
              >
              <div class="relative" ref="liveAtDropdown">
                <div
                  class="flex items-center justify-between h-[48px] w-full px-[14px] border border-[#D0D5DD] rounded-lg"
                  @click="showLiveAtDropdown = !showLiveAtDropdown"
                >
                  <span
                    class="text-[14px] leading-[25px] text-[#D0D5DD] capitalize"
                    v-if="useVerification.data.address.still_live_at != ''"
                    >{{ useVerification.data.address.still_live_at }}</span
                  >
                  <span class="text-[14px] leading-[25px] text-[#D0D5DD]" v-else
                    >Select a response</span
                  >
                  <img src="@/assets/icon/dropdown.svg" alt="" class="" />
                </div>
                <div
                  class="absolute top-[50px] left-[0px] bg-white shadow-xl w-full rounded-lg overflow-hidden z-20"
                  v-if="showLiveAtDropdown"
                >
                  <div
                    class="py-[10px] px-[16px] hover:bg-[#D0D5DD] transition-all duration-200 ease-in-out"
                    @click="addLiveAt('yes')"
                  >
                    Yes
                  </div>
                  <div
                    class="py-[10px] px-[16px] hover:bg-[#D0D5DD] transition-all duration-200 ease-in-out"
                    @click="addLiveAt('no')"
                  >
                    No
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- USER LIVING IN THE SAME ADDRESS -->
        <div
          class="mt-[24px]"
          v-if="useVerification.data.address.still_live_at == 'yes'"
        >
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
                    v-model="useVerification.data.address.landmark"
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
                    v-model="useVerification.data.address.alias"
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
        <div
          class="mt-[24px]"
          v-if="useVerification.data.address.still_live_at == 'no'"
        >
          <div class="fields mt-[24px]">
            <div class="flex flex-col">
              <span
                class="text-[16px] leading-[29px] text-[#667085] font-medium mb-[8px]"
                >Reason for change</span
              >
              <div class="relative" ref="reasonDropdown">
                <div
                  class="flex items-center justify-between h-[48px] w-full px-[14px] border border-[#D0D5DD] rounded-lg cursor-pointer"
                  @click="showReasonDropdown = !showReasonDropdown"
                >
                  <span
                    class="text-[14px] leading-[25px] text-[#D0D5DD] capitalize"
                    v-if="useVerification.data.address.reason != ''"
                    >{{ useVerification.data.address.reason }}</span
                  >
                  <span class="text-[14px] leading-[25px] text-[#D0D5DD]" v-else
                    >Relocation</span
                  >
                  <img src="@/assets/icon/dropdown.svg" alt="" class="" />
                </div>
                <transition name="menu">
                  <div
                    class="absolute top-[50px] left-[0px] bg-white shadow-xl w-full rounded-lg overflow-hidden z-20"
                    v-if="showReasonDropdown"
                  >
                    <div
                      class="py-[10px] px-[16px] hover:bg-[#D0D5DD] transition-all duration-200 ease-in-out cursor-pointer"
                      @click="addReason('incomplete address')"
                    >
                      Incomplete address
                    </div>
                    <div
                      class="py-[10px] px-[16px] hover:bg-[#D0D5DD] transition-all duration-200 ease-in-out cursor-pointer"
                      @click="addReason('never lived in the address')"
                    >
                      Never lived in the address
                    </div>
                    <div
                      class="py-[10px] px-[16px] hover:bg-[#D0D5DD] transition-all duration-200 ease-in-out cursor-pointer"
                      @click="addReason('relocation')"
                    >
                      Relocation
                    </div>
                  </div>
                </transition>
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
                    placeholder="e.g 8, Yaba street, Oregun, Ikeja"
                    class="w-full outline-none"
                    v-model="useVerification.data.address.full_address"
                  />
                </div>
              </div>
            </div>
          </div>
          <!--TASKI  -->
          <div class="fields mt-[24px]">
            <div class="flex flex-col">
              <span
                class="text-[16px] leading-[29px] text-[#667085] font-medium mb-[8px]"
                >State</span
              >
              <div class="relative" ref="stateDropdown">
                <div
                  class="flex items-center justify-between h-[48px] w-full px-[14px] border border-[#D0D5DD] rounded-lg cursor-pointer"
                  @click="showStateDropdown = !showStateDropdown"
                >
                  <span
                    class="text-[14px] leading-[25px] text-[#D0D5DD]"
                    v-if="useVerification.data.address.state != ''"
                    >{{ useVerification.data.address.state }}</span
                  >
                  <span class="text-[14px] leading-[25px] text-[#D0D5DD]" v-else
                    >Choose state</span
                  >
                  <img src="@/assets/icon/dropdown.svg" alt="" class="" />
                </div>
                <transition name="menu">
                  <div
                    class="absolute top-[50px] left-[0px] bg-white shadow-xl w-full rounded-lg overflow-hidden z-20 max-h-[200px] overflow-y-auto"
                    v-if="showStateDropdown"
                  >
                    <div
                      class="py-[10px] px-[16px] hover:bg-[#D0D5DD] transition-all duration-200 ease-in-out cursor-pointer"
                      v-for="(state, index) in useVerification.states.nigeria"
                      :key="index"
                      @click="addState(state)"
                    >
                      {{ state }}
                    </div>
                  </div>
                </transition>
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
                    v-model="useVerification.data.address.lga"
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
                    v-model="useVerification.data.address.landmark"
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
              <div class="relative" ref="lengthDropdown">
                <div
                  class="flex items-center justify-between h-[48px] w-full px-[14px] border border-[#D0D5DD] rounded-lg cursor-pointer"
                  @click="showLengthDropdown = !showLengthDropdown"
                >
                  <span
                    class="text-[14px] leading-[25px] text-[#D0D5DD]"
                    v-if="useVerification.data.address.length_of_living != ''"
                    >{{ useVerification.data.address.length_of_living }}</span
                  >
                  <span class="text-[14px] leading-[25px] text-[#D0D5DD]" v-else
                    >Less than three months</span
                  >
                  <img src="@/assets/icon/dropdown.svg" alt="" class="" />
                </div>
                <transition name="menu">
                  <div
                    class="absolute top-[50px] left-[0px] bg-white shadow-xl w-full rounded-lg overflow-hidden z-20"
                    v-if="showLengthDropdown"
                  >
                    <div
                      class="py-[10px] px-[16px] hover:bg-[#D0D5DD] transition-all duration-200 ease-in-out cursor-pointer"
                      @click="addlength('Less than three months')"
                    >
                      Less than three months
                    </div>
                    <div
                      class="py-[10px] px-[16px] hover:bg-[#D0D5DD] transition-all duration-200 ease-in-out cursor-pointer"
                      @click="addlength('More than three months')"
                    >
                      More than three months
                    </div>
                  </div>
                </transition>
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
                    v-model="useVerification.data.address.alias"
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

        <!--  -->
        <div
          class="mt-[56px]"
          v-if="useVerification.data.address.still_live_at != ''"
        >
          <ReuseableButton text="Continue" :checked="true" @click="next()" />
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
  </section>
</template>

<style scoped>
/* Menu Animation */
.menu-enter-active,
.menu-leave-active {
  transition: transform 0.3s ease;
  transform-origin: top left;
}

.menu-enter-from,
.menu-leave-to {
  transform: scale(0);
}

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
