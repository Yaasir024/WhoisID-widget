import { defineStore } from "pinia";

export const useVerificationStore = defineStore("verification", () => {
  const currentSection = ref("start");

  const nextSection = (section) => {
    currentSection.value = section;
  };

  const data = ref({
    country: "",
    phone: "",
  });

  return { currentSection, nextSection, data };
});
