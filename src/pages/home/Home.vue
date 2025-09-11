<script lang="ts" setup>
import SquareIcon from "@/components/c-icons/SquareIcon.vue";
import CLoading from "@/components/shared/c-loading/CLoading.vue";
import CProductItem from "@/components/shared/c-product-item/CProductItem.vue";
import { useInitBridge } from "@/composable/bridge-getway/useInitBridge";
import { useStoreUser, type IUserData } from "@/composable/state/useStoreUser";
import { useGetProductList } from "@/composable/useGetListProductList";
import Layout from "@/layout/Layout.vue";
import router from "@/router";
import { onMounted } from "vue";

const { data, loading, fetchList } = useGetProductList();
const { bridge } = useInitBridge();

const storeUser = useStoreUser();

onMounted(() => {
  fetchList();
  if (!storeUser.user) {
    bridge.registerHandler("user", (data: IUserData | null, callback: any) => {
      storeUser.setUser(data);
      callback({
        status: 200,
      });
    });
  }
});
</script>
<template>
  <Layout>
    <CLoading v-if="loading" />
    <div v-else class="flex flex-col h-full text-sm gap-2 p-4">
      <div class="text-sm text-gray-500 ov">Hi, {{ storeUser?.user?.accountName || "n/a" }}</div>
      <div class="flex gap-2 justify-between">
        <div class="font-semibold">Recommendation</div>
        <div class="text-gray-500">
          <SquareIcon />
        </div>
      </div>
      <div class="flex-1 overflow-auto relative">
        <ul class="grid grid-cols-2 gap-x-4 gap-y-6">
          <li v-for="product in data" :key="product.id">
            <CProductItem @buy-now="router.push(`/checkout/${product.id}`)" :product="product" />
          </li>
        </ul>
      </div>
    </div>
  </Layout>
</template>
