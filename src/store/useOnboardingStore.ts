import { create } from 'zustand';

type OnboardingState = {
  income: number;
  essentialExpenses: number;
  step: number;
  setIncome: (value: number) => void;
  setEssentialExpenses: (value: number) => void;
  setStep: (step: number) => void;
};

const useOnboardingStore = create<OnboardingState>((set) => ({
  income: 0,
  essentialExpenses: 0,
  step: 1,
  setIncome: (value: number) => set({ income: value }),
  setEssentialExpenses: (value: number) => set({ essentialExpenses: value }),
  setStep: (step: number) => set({ step }),
}));

export { useOnboardingStore };
