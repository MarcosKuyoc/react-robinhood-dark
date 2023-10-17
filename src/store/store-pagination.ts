import { create } from 'zustand';

export interface Store {
  page: number;
  setPage: (page: number) => void;
}

export const usePaginationStore = create<Store>((set) => {
  return {
    page: 0,
    setPage: (page: number) => {
      set({ page });
    },
  };
});
