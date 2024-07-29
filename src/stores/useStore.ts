import React from 'react'
import { create } from 'zustand';

interface StoreState {
  isLoggedIn: boolean;
  setIsLoggedIn: (status: boolean) => void;
}

const useStore = create<StoreState>((set) => ({
  isLoggedIn: false,
  setIsLoggedIn: (status) => set({ isLoggedIn: status }),
}));

export default useStore