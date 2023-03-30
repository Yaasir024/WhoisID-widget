<script setup>
const props = defineProps(["text", "checked"]);
</script>

<template>
  <button
    class="bg-id-green-2 text-[#F2F4F7] text-[18px] leading-[32px] font-semibold py-[10px] px-[8px] w-full rounded-[48px] transition-all duration-200 ease-in-out"
    :class="
      checked ? 'opacity-100 cursor-pointer' : 'opacity-50 cursor-default'
    "
  >
    {{ text }}
  </button>
</template>
