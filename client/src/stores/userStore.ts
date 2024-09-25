import { create } from "zustand";
import { Address, UserType } from "@/utils/types/formTypes";

interface UserStore {
  user: UserType | null;
  setUserStore: (user: UserType) => void;
  clearUserStore: () => void;
  address: Address[] | null;
  setAddressStore: (address: Address[]) => void;
}

const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUserStore: (user) => set({ user }),
  clearUserStore: () => set({ user: null }),
  address: null,
  setAddressStore: (address) => set({ address }),
}));

export default useUserStore;
