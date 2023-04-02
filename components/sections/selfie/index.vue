<script setup>
import { useVerificationStore } from "@/stores/verification";

const useVerification = useVerificationStore();

const paths = ref([
  {
    d: "M317.75 3V107",
    stroke: "#C9CDD3",
    dashArray: 92,
    dashOffset: 107,
    animationCount: 0,
  },
  {
    d: "M350.567 4.79883L339.696 108.229",
    stroke: "#C9CDD3",
    dashArray: 92,
    dashOffset: 107,
    animationCount: 0,
  },
  {
    d: "M383.018 10.0176L361.395 111.745",
    stroke: "#C9CDD3",
    dashArray: 92,
    dashOffset: 107,
    animationCount: 0,
  },
  {
    d: "M414.744 18.5996L382.606 117.509",
    stroke: "#C9CDD3",
    dashArray: 92,
    dashOffset: 107,
    animationCount: 0,
  },
  {
    d: "M445.4 30.4521L403.1 125.461",
    stroke: "#C9CDD3",
    dashArray: 92,
    dashOffset: 107,
    animationCount: 0,
  },
  {
    d: "M474.649 45.4434L422.649 135.51",
    stroke: "#C9CDD3",
    dashArray: 92,
    dashOffset: 107,
    animationCount: 0,
  },
  {
    d: "M502.171 63.4092L441.041 147.547",
    stroke: "#C9CDD3",
    dashArray: 92,
    dashOffset: 107,
    animationCount: 0,
  },
  {
    d: "M527.664 84.1543L458.074 161.441",
    stroke: "#C9CDD3",
    dashArray: 92,
    dashOffset: 107,
    animationCount: 0,
  },
  {
    d: "M550.85 107.45L473.563 177.04",
    stroke: "#C9CDD3",
    dashArray: 92,
    dashOffset: 107,
    animationCount: 0,
  },
  {
    d: "M571.473 133.042L487.335 194.172",
    stroke: "#C9CDD3",
    dashArray: 92,
    dashOffset: 107,
    animationCount: 0,
  },
  {
    d: "M589.307 160.649L499.24 212.649",
    stroke: "#C9CDD3",
    dashArray: 92,
    dashOffset: 107,
    animationCount: 0,
  },
  {
    d: "M604.158 189.97L509.149 232.27",
    stroke: "#C9CDD3",
    dashArray: 92,
    dashOffset: 107,
    animationCount: 0,
  },
  {
    d: "M615.863 220.682L516.953 252.819",
    stroke: "#C9CDD3",
    dashArray: 92,
    dashOffset: 107,
    animationCount: 0,
  },
  {
    d: "M624.294 252.449L522.567 274.072",
    stroke: "#C9CDD3",
    dashArray: 92,
    dashOffset: 107,
    animationCount: 0,
  },
  {
    d: "M629.358 284.924L525.928 295.795",
    stroke: "#C9CDD3",
    dashArray: "92",
    dashOffset: "107",
  },
  {
    d: "M631 317.75H527",
    stroke: "#C9CDD3",
    dashArray: "92",
    dashOffset: "107",
  },
  {
    d: "M629.201 350.567L525.771 339.696",
    stroke: "#C9CDD3",
    dashArray: "92",
    dashOffset: "107",
  },
  {
    d: "M623.982 383.018L522.255 361.395",
    stroke: "#C9CDD3",
    dashArray: "92",
    dashOffset: "107",
  },
  {
    d: "M615.4 414.744L516.491 382.606",
    stroke: "#C9CDD3",
    dashArray: "92",
    dashOffset: "107",
  },
  {
    d: "M603.548 445.4L508.539 403.1",
    stroke: "#C9CDD3",
    dashArray: "92",
    dashOffset: "107",
  },
  {
    d: "M588.557 474.649L498.49 422.649",
    stroke: "#C9CDD3",
    dashArray: "92",
    dashOffset: "107",
  },
  {
    d: "M570.591 502.171L486.453 441.041",
    stroke: "#C9CDD3",
    dashArray: "92",
    dashOffset: "107",
  },
  {
    d: "M549.846 527.664L472.559 458.074",
    stroke: "#C9CDD3",
    dashArray: "92",
    dashOffset: "107",
  },
  {
    d: "M526.55 550.85L456.96 473.563",
    stroke: "#C9CDD3",
    dashArray: "92",
    dashOffset: "107",
  },
  {
    d: "M500.958 571.473L439.828 487.335",
    stroke: "#C9CDD3",
    dashArray: "92",
    dashOffset: "107",
  },
  {
    d: "M473.351 589.307L421.351 499.24",
    stroke: "#C9CDD3",
    dashArray: "92",
    dashOffset: "107",
  },
  {
    d: "M444.03 604.158L401.73 509.149",
    stroke: "#C9CDD3",
    dashArray: "92",
    dashOffset: "107",
  },
  {
    d: "M413.318 615.863L381.181 516.953",
    stroke: "#C9CDD3",
    dashArray: "92",
    dashOffset: "107",
  },
  {
    d: "M381.551 624.294L359.928 522.567",
    stroke: "#C9CDD3",
    dashArray: "92",
    dashOffset: "107",
  },
  {
    d: "M349.076 629.358L338.205 525.928",
    stroke: "#C9CDD3",
    dashArray: 92,
    dashOffset: 107,
  },
  {
    d: "M316.25 631V527",
    stroke: "#C9CDD3",
    dashArray: 92,
    dashOffset: 107,
  },
  {
    d: "M283.433 629.201L294.304 525.771",
    stroke: "#C9CDD3",
    dashArray: 92,
    dashOffset: 107,
  },
  {
    d: "M250.982 623.982L272.605 522.255",
    stroke: "#C9CDD3",
    dashArray: 92,
    dashOffset: 107,
  },
  {
    d: "M219.256 615.4L251.394 516.491",
    stroke: "#C9CDD3",
    dashArray: 92,
    dashOffset: 107,
  },
  {
    d: "M188.6 603.548L230.9 508.539",
    stroke: "#C9CDD3",
    dashArray: 92,
    dashOffset: 107,
  },
  {
    d: "M159.351 588.557L211.351 498.49",
    stroke: "#C9CDD3",
    dashArray: 92,
    dashOffset: 107,
  },
  {
    d: "M131.829 570.591L192.959 486.453",
    stroke: "#C9CDD3",
    dashArray: 92,
    dashOffset: 107,
  },
  {
    d: "M106.336 549.846L175.926 472.559",
    stroke: "#C9CDD3",
    dashArray: 92,
    dashOffset: 107,
  },
  {
    d: "M83.1504 526.55L160.437 456.96",
    stroke: "#C9CDD3",
    dashArray: 92,
    dashOffset: 107,
  },
  {
    d: "M62.5273 500.958L146.665 439.828",
    stroke: "#C9CDD3",
    dashArray: 92,
    dashOffset: 107,
  },
  {
    d: "M44.6934 473.351L134.76 421.351",
    stroke: "#C9CDD3",
    dashArray: 92,
    dashOffset: 107,
  },
  {
    d: "M29.8418 444.03L124.851 401.73",
    stroke: "#C9CDD3",
    dashArray: 92,
    dashOffset: 107,
  },
  {
    d: "M18.1367 413.318L117.047 381.181",
    stroke: "#C9CDD3",
    dashArray: 92,
    dashOffset: 107,
  },
  {
    d: "M9.70605 381.551L111.433 359.928",
    stroke: "#C9CDD3",
    dashArray: 92,
    dashOffset: 107,
  },
  {
    d: "M4.6416 349.076L108.072 338.205",
    stroke: "#C9CDD3",
    dashArray: 92,
    dashOffset: 107,
  },
  { d: "M3 316.25H107", stroke: "#C9CDD3", dashArray: 92, dashOffset: 107 },
  {
    d: "M4.79883 283.433L108.229 294.304",
    stroke: "#C9CDD3",
    dashArray: 92,
    dashOffset: 107,
  },
  {
    d: "M10.0176 250.982L111.745 272.605",
    stroke: "#C9CDD3",
    dashArray: 92,
    dashOffset: 107,
  },
  {
    d: "M18.5996 219.256L117.509 251.394",
    stroke: "#C9CDD3",
    dashArray: 92,
    dashOffset: 107,
  },
  {
    d: "M30.4521 188.6L125.461 230.9",
    stroke: "#C9CDD3",
    dashArray: 92,
    dashOffset: 107,
  },
  {
    d: "M45.4434 159.351L135.51 211.351",
    stroke: "#C9CDD3",
    dashArray: 92,
    dashOffset: 107,
  },
  {
    d: "M63.4092 131.829L147.547 192.959",
    stroke: "#C9CDD3",
    dashArray: 92,
    dashOffset: 107,
  },
  {
    d: "M84.1543 106.336L161.441 175.926",
    stroke: "#C9CDD3",
    dashArray: 92,
    dashOffset: 107,
  },
  {
    d: "M107.45 83.1504L177.04 160.437",
    stroke: "#C9CDD3",
    dashArray: 92,
    dashOffset: 107,
  },
  {
    d: "M133.042 62.5273L194.172 146.665",
    stroke: "#C9CDD3",
    dashArray: 92,
    dashOffset: 107,
  },
  {
    d: "M160.649 44.6934L212.649 134.76",
    stroke: "#C9CDD3",
    dashArray: 92,
    dashOffset: 107,
  },
  {
    d: "M189.97 29.8418L232.27 124.851",
    stroke: "#C9CDD3",
    dashArray: 92,
    dashOffset: 107,
  },
  {
    d: "M220.682 18.1367L252.819 117.047",
    stroke: "#C9CDD3",
    dashArray: 92,
    dashOffset: 107,
  },
  {
    d: "M252.449 9.70605L274.072 111.433",
    stroke: "#C9CDD3",
    dashArray: 92,
    dashOffset: 107,
  },
  {
    d: "M284.924 4.6416L295.795 108.072",
    stroke: "#C9CDD3",
    dashArray: 92,
    dashOffset: 107,
  },
]);

const video = ref(null);
const canvas = ref(null);

const imgSrc = ref("");

// Error Message
const error = ref(false);

let isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
const constraints = {
  audio: false,
  video: {
    facingMode: "user",
    // width: { ideal: 640 },
    // height: { ideal: 480 },
  },
};

// Start Camera
const startCams = () => {
  navigator.mediaDevices
    .getUserMedia(constraints)
    .then(function (stream) {
      // Fix for iOS Safari from https://leemartin.dev/hello-webrtc-on-safari-11-e8bcb5335295
      video.value.setAttribute("autoplay", "");
      video.value.setAttribute("muted", "");
      video.value.setAttribute("playsinline", "");

      video.value.srcObject = stream;
      video.value.play();
    })
    .catch(function (err) {
      error.value = true
    });
};
// Stop Camera
// const stopCams = () => {
//   let tracks = video.value.srcObject.getTracks();
//   tracks.forEach((track) => track.stop());
// };
onMounted(() => {
  startCams();
});



const snap = () => {
  let index = 0;
  if (index < paths.value.length) {
    paths.value.forEach((path, index) => {
      const intervalId = setInterval(() => {
        path.stroke = "#0F595C";
        path.dashArray = 72;
        path.dashOffset = 87;

        setTimeout(() => {
          path.dashArray = 92;
          path.dashOffset = 107;
          path.animationCount = 1;
        }, 30);
        if (path.animationCount == 0) {
        }
      }, 50 * (index + 1));
    });
  }
  setTimeout(() => {
    canvas.value
      .getContext("2d")
      .drawImage(video.value, 0, 0, canvas.value.width, canvas.value.height);

    let image_data_url = canvas.value.toDataURL("image/jpeg");
    useVerification.data.images.selfie = image_data_url;

    let tracks = video.value.srcObject.getTracks();
    tracks.forEach((track) => track.stop());
    useVerification.nextSection("selfie-registered");
  }, 50 * paths.value.length);
};

// PReviouse PAGE
const prev = () => {
  useVerification.nextSection("1");
  let tracks = video.value.srcObject.getTracks();
  tracks.forEach((track) => track.stop());
};
</script>

<template>
  <section
    class="bg-white py-[22px] min-h-screen flex flex-col justify-between"
  >
    <div class="mb-[120px]">
      <div class="flex items-center px-[18px]">
        <img src="@/assets/logo/icon.svg" alt="" class="mr-[8px]" />
        <span class="text-[20px] leading-[36px] font-semibold"
          >WhoisID.Africa</span
        >
      </div>
      <div class="mt-[25px] px-[17px]">
        <div class="w-full h-[4px] bg-[#EAECF0]">
          <div class="flex items-center z-10 w-full h-full">
            <div class="h-full bg-id-green-2 w-[25%]"></div>
            <div class="h-[10px] w-[10px] rounded-full bg-id-green-2"></div>
          </div>
        </div>
      </div>
      <div class="mt-[35px] px-[25px]">
        <h1 class="text-[16px] leading-[29px] text-id-dark-3 font-semibold">
          Take a selfie
        </h1>
        <div class="mt-[24px]">
          <div
            class="relative rounded-full h-[260px] w-[260px] mx-auto flex items-center justify-center"
          >
            <div
              class="relative h-[230px] w-[230px] rounded-full overflow-hidden"
            >
              <video class="video" ref="video" autoplay></video>
              <canvas class="canvas hidden" ref="canvas"></canvas>
            </div>

            <svg
              width="360"
              height="360"
              viewBox="0 0 634 634"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="circle-svg center"
            >
              <path
                v-for="(path, index) in paths"
                :key="index"
                :d="path.d"
                :stroke="path.stroke"
                stroke-width="3"
                stroke-linecap="round"
                :stroke-dasharray="path.dashArray"
                :stroke-dashoffset="path.dashOffset"
              ></path>
            </svg>
          </div>
          <div class="mt-[32px] flex justify-center">
            <button
              class="flex items-center py-[8px] px-[16px] bg-[#F2F5FE] rounded-[32px]"
            >
              <img src="@/assets/icon/frame.svg" alt="" class="mr-[8px]" />
              <span class="text-[14px] leading-[25px] text-[#2E2C34]"
                >Align your head with the frame</span
              >
            </button>
          </div>
        </div>
        <div class="mt-[40px]">
          <ReuseableButton text="Continue" :checked="true" @click="snap()" />
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

.video {
  width: 100%; /* ensures video fills the circular container */
  height: 100%; /* ensures video fills the circular container */
  object-fit: cover; /* optional: scales the video to fill the container */
}
.circle-svg path {
  /* animation: spin 2s ease-in-out; */
  transition: all 0.3s ease;
}
.center {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
/* @keyframes spin {
  0% {
    transform: translate(-50%, -50%) rotate(0);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
} */
</style>
