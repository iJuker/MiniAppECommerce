import { defineStore } from "pinia";

export interface IUserData {
  accountName?: string;
}

export const useStoreUser = defineStore("storeUser", {
  state: () => ({ user: null as IUserData | null }),
  actions: {
    setUser(user: IUserData | null) {
      this.user = user;
    },
  },
});
