import { create } from 'zustand';
// TEMPORARY PATCH: Add designer to FilterOptions type inline since types.ts is missing
export type FilterOptions = {
  priceRange: [number, number];
  tags: string[];
  sortBy: 'newest' | 'popular' | 'price-asc' | 'price-desc';
  designer?: string;
};
import { Model } from '../types';
import { sampleModels } from '../data/models';

interface ModelStore {
  models: Model[];
  searchQuery: string;
  filters: FilterOptions;
  setSearchQuery: (query: string) => void;
  setFilters: (filters: Partial<FilterOptions>) => void;
  filteredModels: () => Model[];
}

export const useModelStore = create<ModelStore>((set, get) => ({
  models: sampleModels,
  searchQuery: '',
  filters: {
    priceRange: [0, 1000],
    tags: [],
    sortBy: 'newest',
    designer: '',
  },
  
  setSearchQuery: (query) => set({ searchQuery: query }),
  
  setFilters: (filters) => set((state) => ({
    filters: { ...state.filters, ...filters }
  })),
  
  filteredModels: () => {
    const { models, searchQuery, filters } = get();
    
    return models
      .filter(model => {
        const matchesSearch = searchQuery === '' || 
          model.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          model.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          model.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
          
        const matchesPriceRange = 
          model.price >= filters.priceRange[0] && 
          model.price <= filters.priceRange[1];
          
        const matchesTags = filters.tags.length === 0 || 
          filters.tags.some(tag => model.tags.includes(tag));

        const matchesDesigner = !filters.designer || model.designer?.name === filters.designer;
        
        return matchesSearch && matchesPriceRange && matchesTags && matchesDesigner;
      })
      .sort((a, b) => {
        switch (filters.sortBy) {
          case 'newest':
            return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
          case 'popular':
            return b.likes - a.likes;
          case 'price-asc':
            return a.price - b.price;
          case 'price-desc':
            return b.price - a.price;
          default:
            return 0;
        }
      });
  }
}));