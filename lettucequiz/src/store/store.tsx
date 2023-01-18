import { create } from "zustand";

interface StoreInterface {
  points: number;
  setPoints: (state: number) => void;
  totalPoints: number;
  incrementTotalPoints: (state: number) => void;
}

const useStore = create<StoreInterface>((set) => ({
  points: 0,
  setPoints: (input) => set(() => ({ points: input })),
  totalPoints: 0,
  incrementTotalPoints: (input) =>
    set((state) => ({ totalPoints: state.totalPoints + input })),
}));

export default useStore;
