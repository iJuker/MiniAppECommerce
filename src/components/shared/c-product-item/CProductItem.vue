<script setup lang="ts">
import HeartIcon from "@/components/c-icons/HeartIcon.vue";
import CButton from "../c-button/CButton.vue";
import type { IProduct } from "@/composable/useGetListProductList";
import HeartFillIcon from "@/components/c-icons/HeartFillIcon.vue";

const props = defineProps<{ product: IProduct }>();
const emits = defineEmits(["buyNow"]);

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

const onBuyNow = () => {
  emits("buyNow");
};
</script>
<template>
  <router-link :to="`/product/${product.id}`">
    <div class="flex gap-3 flex-col">
      <div :class="getRandomBgColor()" class="relative aspect-square rounded-xl flex items-center justify-center">
        <div class="p-7">
          <img class="size-full aspect-square object-contain" alt="" :src="product.imgSrc" />
        </div>
        <div class="absolute top-3 right-3 text-red-400">
          <HeartFillIcon v-if="product.isFavorite" />
          <HeartIcon v-else />
        </div>
      </div>
      <article>
        <p class="font-semibold line-clamp-1">
          {{ props.product.title }}
        </p>
        <div class="flex justify-between">
          <h3 class="font-semibold text-orange-500 text-lg">
            {{ props.product.price }}
          </h3>
          <div>
            <CButton @click="onBuyNow" color="secondary"> Buy </CButton>
          </div>
        </div>
      </article>
    </div>
  </router-link>
</template>
