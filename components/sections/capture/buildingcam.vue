<script setup>
import { useVerificationStore } from "@/stores/verification";

const useVerification = useVerificationStore();

const emits = defineEmits(["close", "next"]);

const snapped = ref(false);

const video = ref(null);
const canvas = ref(null);

const imgSrc = ref("");

let isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
const constraints = {
  audio: false,
  video: {
    facingMode: isMobile ? "environment" : "user",
    width: { ideal: 640 },
    height: { ideal: 480 },
  },
};

const startCams = () => {
  navigator.mediaDevices
    .getUserMedia(constraints)
    .then(function (stream) {
      video.value.srcObject = stream;
      video.value.play();
    })
    .catch(function (err) {
      console.log("Error getting camera stream: ", err);
    });
};
onMounted(() => {
  startCams();
});

const snap = () => {
  canvas.value
    .getContext("2d")
    .drawImage(video.value, 0, 0, canvas.value.width, canvas.value.height);

  let image_data_url = canvas.value.toDataURL("image/jpeg");
  imgSrc.value = image_data_url;

  let tracks = video.value.srcObject.getTracks();
  tracks.forEach((track) => track.stop());
};

const retake = () => {
  startCams();
  imgSrc.value = "";
};

const useImg = () => {
  useVerification.data.images.building = imgSrc.value;
  emits('next')
};
</script>

<template>
  <div
    class="fixed bottom-0 left-0 right-0 top-0 flex items-center justify-center z-30"
  >
    <div
      class="relative modal max-w-[430px] w-full bg-black text-white mt-auto py-[63px] p-[32px] rounded-t-[8px] sm:ml-[-14px] flex items-center flex-col justify-between"
    >
      <button
        class="absolute top-[20px] right-[20px] flex items-center justify-center h-[38px] w-[38px] rounded-full bg-white/30"
      >
        <img
          src="@/assets/icon/close-white.svg"
          alt=""
          class=""
          @click="$emit('close')"
        />
      </button>
      <h1 class="text-[18px] leading-[32px] font-medium text-center">
        Take an image of your building
      </h1>
      <div class="">
        <div class="camera sm:h-[250px] sm:w-[360px] rounded-lg">
          <img :src="imgSrc" alt="" class="w-full h-full" v-if="imgSrc" />
          <video class="video" ref="video" v-else></video>
          <canvas class="canvas hidden" ref="canvas"></canvas>
        </div>
      </div>
      <div class="flex flex-col items-center justify-center w-full">
        <h1
          class="text-[18px] leading-[32px] font-medium text-center mb-[24px]"
        >
          Ensure the image fits in this frame
        </h1>
        <img
          src="@/assets/icon/capture-btn.svg"
          alt=""
          class=""
          @click="snap()"
          v-if="imgSrc == ''"
        />
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
  </div>
</template>

<style scoped>
.modal {
  height: calc(100vh - 48px);
}
</style>
