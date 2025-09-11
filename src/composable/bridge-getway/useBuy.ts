import { onMounted, ref } from "vue";
import { useInitBridge } from "./useInitBridge";

/**
 * registerHandler:buyNowCallBack
 * callHandler:buyNow
 */
export const useBuy = () => {
  const { bridge } = useInitBridge();

  const isSuccess = ref(false);

  onMounted(() => {
    bridge.registerHandler("buyNowCallBack", (data: boolean, callback: any) => {
      isSuccess.value = data;
      callback({
        status: 200,
      });
    });
  });

  const onBuyNow = (amount?: number) => {
    bridge.callHandler("buyNow", { amount });
  };

  return { isSuccess, onBuyNow };
};
