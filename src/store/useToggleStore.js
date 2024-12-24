import { create } from "zustand";

const useToggleStore = create((set) => ({
    isSoundOn: false,
    toggleSound: () => set((state) => ({ isSoundOn: !state.isSoundOn })),
  }));
  
  export default useToggleStore;