import { getPastDate } from '@/helpers';
import create from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export interface Store {
  selected: string;
  dateFrom: string;
  dateTo: string;
  setDates: (dateFrom: string, dateTo: string) => void;
  setSelected: (selected: string) => void;
}

const { dateFrom, dateTo } = getPastDate(30);

export const useHistoricalStore = create<Store>()(
  persist((set) => ({
    selected: '1M',
    dateFrom: dateFrom,
    dateTo: dateTo,
    setDates: (dateFrom: string, dateTo: string) => {
      set({ dateFrom, dateTo });
    },
    setSelected: (selected: string) => {
      set({ selected });
    },
  }),
  {
    name: 'historical-storage', // name of the item in the storage (must be unique)
    storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
  }
  )
);
