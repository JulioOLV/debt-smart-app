import { create } from 'zustand';

type StoreState = {
  count: number;
  increase: () => void;
  decrease: () => void;
  setCount: (v: number) => void;
};

const useStore = create<StoreState>((set) => ({
  count: 0,
  increase: () => set((s) => ({ count: s.count + 1 })),
  decrease: () => set((s) => ({ count: s.count - 1 })),
  setCount: (v: number) => set({ count: v }),
}));

export default useStore;
