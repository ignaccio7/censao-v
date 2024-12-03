import { create } from "zustand";

export const useUiStore = create((set, get) => {
  return {
    isModalOpen: false,
    toggleModal: () => {
      console.log('toggleModal')
      const { isModalOpen } = get()
      set({ isModalOpen: !isModalOpen })
    }
  }
})