<script setup>
const emits = defineEmits(["close"]);
</script>

<template>
  <div
    class="fixed bottom-0 left-0 right-0 top-0 flex items-center justify-center z-30"
  >
    <div class="modal max-w-[430px] w-full bg-white mt-auto overflow-hidden">
      <div
        class="h-full overflow-y-auto p-[24px] pb-[120px]"
      >
        <div
          class="text-id-dark-1 text-[20px] font-semibold leading-[28px] pb-[12px] border-b mb-[24px]"
        >
          Privacy Policy
        </div>
        <div class="text-[14px] leading-[25px] text-[#667085]">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
          ullamco est sit aliqua dolor do amet sint. Velit officia consequat
          duis enim velit mollit. Exercitation veniam consequat sunt nostrud
          amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do
          amet sint. Velit officia consequat duis enim velit mollit.
          Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non
          deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
          consequat duis enim velit mollit. Exercitation veniam consequat sunt
          nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua
          dolor do amet sint. Velit officia consequat duis enim velit mollit.
          Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non
          deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
          consequat duis enim velit mollit. Exercitation veniam consequat sunt
          nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua
          dolor do amet sint. Velit officia consequat duis enim velit mollit.
        </div>
        <div class="mt-[32px]">
          <ReuseableButton text="Continue" />
          <div class="flex justify-center w-full mt-[10px]">
            <button class="flex items-center" @click="$emit('close')">
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
  </div>
</template>

<style scoped>
.modal {
  height: calc(100vh - 88px);
  /* background: #ffffff; */
  border-radius: 32px 32px 0px 0px;
}
</style>
