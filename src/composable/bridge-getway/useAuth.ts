import { onMounted, ref } from "vue";
import { useInitBridge } from "./useInitBridge";

// registerHandler: auth
export const useAuth = () => {
  const { bridge } = useInitBridge();
  const userData = ref<any>(null);

  onMounted(() => {
    // Register handler for native → JS call
    bridge.registerHandler("auth", (data: any, callback: any) => {
      userData.value = data;
      callback({
        status: 200,
      });
    });
  });

  return { userData };
};
