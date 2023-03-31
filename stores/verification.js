import { defineStore } from "pinia";

export const useVerificationStore = defineStore("verification", () => {
  const currentSection = ref("start");

  const nextSection = (section) => {
    currentSection.value = section;
  };

  const data = reactive({
    country: "Nigeria",
    phone: "",
    address: {
      still_live_at: "",
      reason: "relocation",
      full_address: "",
      state: "",
      lga: "",
      landmark: "",
      length_of_living: "",
      alias: "",
    },
    images: {
      utility: "",
      building: "",
      selfie: "",
    },
  });

  const states = {
    nigeria: [
      "Abia",
      "Adamawa",
      "Akwa Ibom",
      "Anambra",
      "Bauchi",
      "Bayelsa",
      "Benue",
      "Borno",
      "Cross River",
      "Delta",
      "Ebonyi",
      "Edo",
      "Ekiti",
      "Enugu",
      "FCT - Abuja",
      "Gombe",
      "Imo",
      "Jigawa",
      "Kaduna",
      "Kano",
      "Katsina",
      "Kebbi",
      "Kogi",
      "Kwara",
      "Lagos",
      "Nasarawa",
      "Niger",
      "Ogun",
      "Ondo",
      "Osun",
      "Oyo",
      "Plateau",
      "Rivers",
      "Sokoto",
      "Taraba",
      "Yobe",
      "Zamfara",
    ],
  };

  return { currentSection, nextSection, data, states };
});
