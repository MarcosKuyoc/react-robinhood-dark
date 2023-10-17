import { create } from 'zustand';

export interface StoreFavorites {
  favorites: string[];
  setFavorites: (favorite: string) => void;
  currentSuggested: string;
  setCurrentSuggested: (favorite: string) => void;
}

export const useFavoritesStore = create<StoreFavorites>((set) => {
  return {
    favorites: [],
    currentSuggested: '',
    setFavorites: (favorite: string) => {
      set((state) => ({ favorites: [...state.favorites, favorite] }));
    },
    setCurrentSuggested: (suggested: string) => {
      set({ currentSuggested: suggested });
    },
  };
});
