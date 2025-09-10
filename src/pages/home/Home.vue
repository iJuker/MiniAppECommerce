<script lang="ts" setup>
import SquareIcon from "@/components/c-icons/SquareIcon.vue";
import CLoading from "@/components/shared/c-loading/CLoading.vue";
import CProductItem from "@/components/shared/c-product-item/CProductItem.vue";
// import { useAuth } from "@/composable/bridge-getway/useAuth";
import { useBuy } from "@/composable/bridge-getway/useBuy";
import { useGetProductList } from "@/composable/useGetListProductList";
import { onMounted } from "vue";

const { data, loading, fetchList } = useGetProductList();

// const { userData } = useAuth();
const {  onBuyNow } = useBuy();

onMounted(() => {
  fetchList();
});
</script>
<template>
  <div class="flex flex-col text-sm gap-2">
    <div class="text-sm text-gray-500 ov">Hi, Kosal</div>
    <div class="flex gap-2 justify-between">
      <div class="font-semibold">Recommendation</div>
      <div class="text-gray-500">
        <SquareIcon />
      </div>
    </div>
    <div class="flex-1 overflow-auto relative">
      <ul class="grid grid-cols-2 gap-4">
        <div v-if="loading" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <CLoading />
        </div>
        <li v-else v-for="product in data" :key="product.id">
          <CProductItem @buy-now="onBuyNow" :product="product" />
        </li>
      </ul>
    </div>
  </div>
</template>
