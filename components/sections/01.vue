<script setup>
import countries from "@/data/countries.json";

import { useVerificationStore } from "@/stores/verification";

const useVerification = useVerificationStore();

// FETCH DATA

// const { data: country, error } = useAsyncData("country", async () => {
//   const response = await $fetch(
//     "https://restcountries.com/v3.1/all?fields=name,flags,idd"
//   );

//   const refinedData = response.map((item) => {
//     return {
//       name: item.name.common,
//       flag: item.flags.svg,
//       code: item.idd.root + item.idd.suffixes[0],
//     };
//   });
//   const sortedData = refinedData.sort((a, b) => {
//     const nameA = a.name.toUpperCase();
//     const nameB = b.name.toUpperCase();

//     if (nameA < nameB) {
//       return -1;
//     }

//     if (nameA > nameB) {
//       return 1;
//     }

//     return 0;
//   });
//   return sortedData;
// });

const searchQuery = ref("");
const filteredCountry = computed(() => {
  const query = ref(searchQuery.value.toLowerCase());
  if (searchQuery.value === "") {
    return countries;
  }
  return countries.filter((item) => {
    return Object.values(item).some((word) =>
      String(word).toLowerCase().includes(query.value)
    );
  });
});

// Get Full Data of selected Country
const fullCountryData = computed(() => {
  return countries.find((obj) => obj.name == useVerification.data.country);
});

const countyDropdown = ref(null);
const showDropdown = ref(false);

useClickOutside(countyDropdown, () => {
  showDropdown.value = false;
});

const addCountry = (i) => {
  useVerification.data.country = i;
  showDropdown.value = false;
  searchQuery.value = "";
};

const next = () => {
  if (
    (useVerification.data.country != "") &
    (useVerification.data.phone != "")
  ) {
    useVerification.nextSection("selfie");
  }
};

const prev = () => {
  useVerification.nextSection("start");
  useVerification.data.country = "Nigeria";
  useVerification.data.phone = "";
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
            <div class="h-full bg-id-green-2 w-[12.5%]"></div>
            <div class="h-[10px] w-[10px] rounded-full bg-id-green-2"></div>
          </div>
        </div>
      </div>
      <div class="mt-[35px] px-[25px]">
        <h1 class="text-[16px] leading-[29px] text-id-dark-3 font-semibold">
          Select your country and enter phone number
        </h1>
        <div class="fields">
          <div class="flex flex-col cursor-pointer">
            <span
              class="text-[16px] leading-[29px] text-[#667085] font-medium mt-[24px] mb-[20px]"
              >Country</span
            >
            <div class="relative" ref="countyDropdown">
              <div
                class="flex items-center justify-between h-[48px] w-full px-[14px] border border-[#D0D5DD] rounded-lg"
                @click="showDropdown = !showDropdown"
              >
                <span
                  class="text-[14px] leading-[25px] text-[#D0D5DD] capitalize"
                  v-if="useVerification.data.country"
                  >{{ useVerification.data.country }}</span
                >
                <span class="text-[14px] leading-[25px] text-[#D0D5DD]" v-else
                  >Select country</span
                >
                <img src="@/assets/icon/dropdown.svg" alt="" class="" />
              </div>
              <transition name="menu">
                <div
                  class="absolute top-[50px] left-[0px] bg-white shadow-xl w-full rounded-lg overflow-hidden z-20"
                  v-if="showDropdown"
                >
                  <div class="px-[16px] pt-[10px] pb-[5px] border-b">
                    <input
                      type="text"
                      v-model="searchQuery"
                      placeholder="Search for country"
                      class="h-[34px] w-full px-1 border-2 rounded-md outline-none"
                    />
                  </div>
                  <div class="max-h-[250px] overflow-y-scroll">
                    <div
                      class="py-[10px] px-[16px] hover:bg-[#D0D5DD] transition-all duration-200 ease-in-out"
                      v-for="(data, index) in filteredCountry"
                      :key="index"
                      @click="addCountry(data.name)"
                    >
                      {{ data.name }}
                    </div>
                  </div>
                </div>
              </transition>
            </div>
          </div>
        </div>
        <div class="fields">
          <div class="flex flex-col mt-[32px]">
            <span
              class="text-[16px] leading-[29px] text-[#667085] font-medium mb-[20px]"
              >Phone Number</span
            >
            <div class="">
              <div
                class="flex items-center h-[48px] w-full px-[14px] border border-[#D0D5DD] rounded-lg text-[#00101B]"
              >
                <img
                  :src="fullCountryData.flag"
                  alt=""
                  class="mr-[16px] h-[20px] w-[24px]"
                />
                <span class="text-[14px] leading-[25px]">{{
                  fullCountryData.code
                }}</span>
                <input
                  type="number"
                  class="ml-[4px] outline-none w-full"
                  v-model="useVerification.data.phone"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="mt-[8px] flex items-center">
          <img src="@/assets/icon/q-mark.svg" alt="" class="mr-[5px]" />
          <span class="text-id-gray-2 text-[11px] sm:text-[12px] leading-[22px]"
            >Enter the phone number linked to your government issued ID</span
          >
        </div>
        <div class="mt-[56px]">
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
</style>
