import { create } from "zustand";
import { UserType } from "@/utils/types/formTypes";

interface UserStore {
  user: UserType | null;
  setUserStore: (user: UserType) => void;
  clearUserStore: () => void;
}

const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUserStore: (user) => set({ user }),
  clearUserStore: () => set({ user: null }),
}));

export default useUserStore;
