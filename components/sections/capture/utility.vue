<script setup>
import { useVerificationStore } from "@/stores/verification";

const useVerification = useVerificationStore();

const emits = defineEmits(["close", "next"]);

const snapped = ref(false);

const videoUtility = ref(null);
const canvasUtility = ref(null);

const imgSrc = ref("");

// Error Message
const error = ref(false);

const feedOrientation = ref("potrait");
let isMobile;
let constraints;

onMounted(() => {
  isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  constraints = {
    audio: false,
    video: {
      facingMode: isMobile ? "environment" : "user",
      // width: { ideal: 580 },
      // height: { ideal: 500 },
    },
  };
});

const startCams = () => {
  navigator.mediaDevices
    .getUserMedia(constraints)
    .then(function (stream) {
      // Fix for iOS Safari from https://leemartin.dev/hello-webrtc-on-safari-11-e8bcb5335295
      videoUtility.value.setAttribute("autoplay", "");
      videoUtility.value.setAttribute("muted", "");
      videoUtility.value.setAttribute("playsinline", "");
      videoUtility.value.srcObject = stream;
      videoUtility.value.play();
    })
    .catch(function (err) {
      error.value = true
    });
};

const stopCams = () => {
  let tracks = videoUtility.value.srcObject.getTracks();
  tracks.forEach((track) => track.stop());
};
onMounted(() => {
  startCams();
});
const snap = () => {
  canvasUtility.value
    .getContext("2d")
    .drawImage(videoUtility.value, 0, 0, canvasUtility.value.width, canvasUtility.value.height);

  let image_data_url = canvasUtility.value.toDataURL("image/jpeg");
  imgSrc.value = image_data_url;

  let tracks = videoUtility.value.srcObject.getTracks();
  tracks.forEach((track) => track.stop());
};

const retake = () => {
  startCams();
  imgSrc.value = "";
};

const useImg = () => {
  useVerification.data.images.utility = imgSrc.value;
  useVerification.nextSection("building-capture");
  stopCams();
};

const closeModal = () => {
  emits("close");
  stopCams();
};

const rotateFeed = () => {
  if (feedOrientation.value == "potrait") {
    feedOrientation.value = "landscape";
  } else if (feedOrientation.value == "landscape") {
    feedOrientation.value = "potrait";
  }
};
</script>

<template>
  <section class="bg-white h-screen flex flex-col overflow-hidden">
    <div class="flex items-center px-[18px] py-[20px]">
      <img src="@/assets/logo/icon.svg" alt="" class="mr-[8px]" />
      <span class="text-[20px] leading-[36px] font-semibold"
        >WhoisID.Africa</span
      >
    </div>
    <div
      class="h-full w-full bg-black text-white p-[32px] flex flex-col justify-between items-center mb-[24px] rounded-lg"
    >
      <button
        class="absolute top-[20px] right-[20px] flex items-center justify-center h-[38px] w-[38px] rounded-full bg-white/30"
        v-if="false"
      >
        <img
          src="@/assets/icon/close-white.svg"
          alt=""
          class=""
          @click="closeModal()"
        />
      </button>
      <h1 class="text-[18px] leading-[32px] font-medium text-center">
        Take an image of your utility bill
      </h1>
      <div class="">
        <div class="camera h-[300px] w-[360px] rounded-lg overflow-hidden">
          <img :src="imgSrc" alt="" class="h-[300px] w-[360px]" v-if="imgSrc" />
          <video
            class="video"
            ref="videoUtility"
            autoplay
            :class="feedOrientation == 'potrait' ? 'rotate-0' : 'rotate-90'"
            v-else
          ></video>
          <canvas class="canvas hidden" ref="canvasUtility"></canvas>
        </div>
      </div>
      <div class="flex flex-col items-center justify-center w-full sm:mb-0">
        <h1
          class="text-[18px] leading-[32px] font-medium text-center mb-[24px]"
        >
          Ensure the image fits in this frame
        </h1>
        <div
          class="relative w-full flex items-center justify-center"
          v-if="imgSrc == ''"
        >
          <img
            src="@/assets/icon/capture-btn.svg"
            alt=""
            class="cursor-pointer"
            @click="snap()"
          />
          <button
            class="absolute right-[20px] top-[20px] h-[38px] w-[38px] rounded-full bg-white/30 flex items-center justify-center transition-all duration-150 ease-in-out"
            :class="feedOrientation == 'potrait' ? 'rotate-0' : 'rotate-180'"
            @click="rotateFeed()"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              height="20"
              width="20"
              fill="#ffffff"
            >
              <path
                d="M0 224c0 17.7 14.3 32 32 32s32-14.3 32-32c0-53 43-96 96-96H320v32c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l64-64c12.5-12.5 12.5-32.8 0-45.3l-64-64c-9.2-9.2-22.9-11.9-34.9-6.9S320 19.1 320 32V64H160C71.6 64 0 135.6 0 224zm512 64c0-17.7-14.3-32-32-32s-32 14.3-32 32c0 53-43 96-96 96H192V352c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9l-64 64c-12.5 12.5-12.5 32.8 0 45.3l64 64c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V448H352c88.4 0 160-71.6 160-160z"
              />
            </svg>
          </button>
        </div>
        <div class="flex items-center justify-between w-full" v-if="imgSrc">
          <button
            class="text-white text-[20px] leading-[32px] font-semibold py-[6px] px-[14px] rounded-[48px] border border-white"
            @click="retake()"
          >
            Retake Image
          </button>
          <button
            class="text-white text-[20px] leading-[32px] font-semibold py-[6px] px-[14px] rounded-[48px] border border-white"
            @click="useImg()"
          >
            Use Image
          </button>
        </div>
      </div>
    </div>
    <SectionsFooter />
    <div class="">
      <div
        class="overlay fixed bottom-0 left-0 right-0 top-0 z-[25]"
        v-if="error"
      ></div>
      <transition name="error">
        <div
          class="fixed bottom-0 left-0 right-0 top-0 flex items-center justify-center z-30"
          v-if="error"
        >
          <div
            class="relative modal h-[280px] max-w-[430px] w-full bg-white p-[32px] rounded-[32px] sm:ml-[-14px] flex items-center flex-col"
          >
            <button class="absolute top-[20px] left-[20px]">
              <img
                src="@/assets/icon/close.svg"
                alt=""
                class=""
                @click="error = false"
              />
            </button>
            <img
              src="@/assets/icon/error.svg"
              alt=""
              class=""
            />
            <h2 class="text-[16px] leading-[29px] font-semibold mt-[16px] text-center">
              Sorry, camera access is currently unavailable. Another webpage might be using the camera or access permission has not been granted. Please check your browser settings and try again.
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
.error-enter-active,
.error-leave-active {
  transition: all 0.4s ease;
}
.error-enter-from,
.error-leave-to {
  opacity: 0;
  transform: translateY(100%);
}

.modal {
  height: calc(100vh - 48px);
}
</style>
