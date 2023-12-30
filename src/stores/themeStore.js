import { create } from "zustand";

export const useThemeStore = create((set) => ({
    theme: false,
    setTheme: (theme) => set({ theme }),
}));
