import { create } from "zustand";

export const useUserStore = create((set) => ({
    isLogged: false,
    user: null,
    token: null,
    setUser: (user) => set({ user }),
    setIsLogged: (isLogged) => set({ isLogged }),
    setToken: (token) => set({ token }),
}));
