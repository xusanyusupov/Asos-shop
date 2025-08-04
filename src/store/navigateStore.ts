import { create } from "zustand";

type MenuState = {
  openMenu: boolean;
  setOpenMenu: (value: boolean) => void;
};

export const useMenuStore = create<MenuState>((set) => ({
  openMenu: false,
  setOpenMenu: (value) => set({ openMenu: value }),
}));
