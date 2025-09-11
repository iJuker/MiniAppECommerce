<script lang="ts" setup>
import CheckIcon from "@/components/c-icons/CheckIcon.vue";
import CButton from "../c-button/CButton.vue";
import { useRouter } from "vue-router";

const router = useRouter();
</script>
<template>
  <div class="h-dvh flex flex-col bg-gray-100 p-4">
    <div class="flex-1 overflow-auto flex items-center justify-center">
      <div class="text-center space-y-3">
        <div class="size-24 mx-auto bg-green-500 text-white rounded-full p-2">
          <CheckIcon />
        </div>
        <h5 class="text-lg text-gray-700 font-semibold">Payment SUccess</h5>
        <p class="text-gray-500 text-sm">Shop owner will preparing your order and sent out asap. Thanks for purchasing.</p>
      </div>
    </div>
    <footer>
      <CButton @click="router.push('/')" isFull color="secondary">
        <div class="text-lg">Home</div>
      </CButton>
    </footer>
  </div>
</template>
