<script lang="ts" setup>
import CButton from "@/components/shared/c-button/CButton.vue";
import CLoading from "@/components/shared/c-loading/CLoading.vue";
import { useBuy } from "@/composable/bridge-getway/useBuy";
import { useGetListProductDetail } from "@/composable/useGetListProductDetail";
import { onMounted } from "vue";
import { useRoute } from "vue-router";
const listColor = ["Black", "White", "Red"];
const { data, loading, fetchData } = useGetListProductDetail();

let lastColor: any = null;

function getRandomBgColor() {
  const colors = [
    "bg-orange-400/15",
    "bg-green-400/15",
    "bg-red-400/15",
    "bg-blue-400/15",
    "bg-purple-400/15",
    "bg-pink-400/15",
    "bg-yellow-400/15",
    "bg-teal-400/15",
  ];

  let newColor;
  do {
    const randomIndex = Math.floor(Math.random() * colors.length);
    newColor = colors[randomIndex];
  } while (newColor === lastColor);

  lastColor = newColor;
  return newColor;
}

const { onBuyNow } = useBuy();

onMounted(() => {
  const route = useRoute();
  fetchData(+route.params.id);
});
</script>
<template>
  <div v-if="loading" class="h-full flex flex-col justify-center items-center">
    <CLoading />
  </div>
  <div v-else class="h-full flex flex-col py-2">
    <div class="flex-1 overflow-auto">
      <div class="space-y-4">
        <section class="relative aspect-square rounded-xl flex items-center justify-center">
          <img :class="getRandomBgColor()" class="size-full rounded-4xl p-12 aspect-square object-contain" :src="data?.imgSrc" />
        </section>
        <section>
          <div class="flex items-center gap-3 justify-between">
            <h2 class="font-semibold text-xl text-gray-600">
              {{ data?.title }}
            </h2>
            <p class="text-sm text-gray-500">Available in Stock</p>
          </div>
        </section>
        <section class="flex gap-4 justify-between">
          <h2 class="text-orange-500 font-semibold text-4xl">{{ data?.price }}</h2>
          <div class="flex gap-2">
            <div
              v-for="value in listColor"
              :class="{ 'bg-red-200 border-red-200 text-red-500': value === 'White' }"
              class="border text-xs border-gray-300 px-2 py-1 rounded-lg text-gray-600 flex items-center"
            >
              {{ value }}
            </div>
          </div>
        </section>
        <section class="text-sm text-gray-600 pt-4">
          {{ data?.description }}
        </section>
      </div>
    </div>
    <footer class="pt-4">
      <CButton @click="onBuyNow(data?.price ?? '')" isFull color="primary"> <span class="py-1 block"> Buy Now </span> </CButton>
    </footer>
  </div>
</template>
