import { create } from "zustand";

interface StoreInterface {
  points: number;
  setPoints: (state: number) => void;
  resetTotalPoints: () => void;
  totalPoints: number;
  incrementTotalPoints: (state: number) => void;
}

const useStore = create<StoreInterface>((set) => ({
  points: 0,
  totalPoints: 0,
  setPoints: (points: number) => set((state) => ({ ...state, points })),
  resetTotalPoints: () => set(() => ({ totalPoints: 0 })),
  incrementTotalPoints: (increment: number) =>
    set((state) => ({ ...state, totalPoints: state.totalPoints + increment })),
}));

export default useStore;
