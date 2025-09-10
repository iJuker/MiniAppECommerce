import { onMounted, ref } from "vue";
import { useInitBridge } from "./useInitBridge";

/**
 * registerHandler:buyNowCallBack
 * callHandler:buyNow
 */
export const useBuy = () => {
  const { bridge } = useInitBridge();
  const buyNowCallBackData = ref<any>(null);
  const isBuying = ref(false);

  onMounted(() => {
    bridge.registerHandler("buyNowCallBack", (data: any, callback: any) => {
      buyNowCallBackData.value = data;
      callback({
        status: 200,
      });
    });
  });

  const onBuyNow = (price: string) => {
    isBuying.value = true;
    bridge.callHandler("buyNow", { price }, () => {
      isBuying.value = false;
    });
  };

  return { isBuying, buyNowCallBackData, onBuyNow };
};
