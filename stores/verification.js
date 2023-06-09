import { defineStore } from "pinia";

export const useVerificationStore = defineStore("verification", () => {
  const currentSection = ref("start");

  const scrollToTop = () => {
    const currentPosition =
      window.pageYOffset || document.documentElement.scrollTop;

    if (currentPosition > 0) {
      window.scrollTo(0, currentPosition - 80);
      window.requestAnimationFrame(scrollToTop);
    }
  };
  const nextSection = (section) => {
    currentSection.value = section;
    scrollToTop();
  };

  const data = reactive({
    country: "Nigeria",
    phone: "",
    phone_Country: "Nigeria",
    Code: "",
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
