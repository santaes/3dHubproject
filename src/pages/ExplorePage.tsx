import React from 'react';
import { Search } from 'lucide-react';
import { useModelStore } from '../store/useModelStore';
import ModelCard from '../components/models/ModelCard';
import ModelFilters from '../components/models/ModelFilters';

const ExplorePage = () => {
  const { searchQuery, setSearchQuery, filteredModels } = useModelStore();
  const models = filteredModels();

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
        <h1 className="text-4xl font-bold mb-4 md:mb-0">Explore 3D Fashion Models</h1>
        {/* Search Bar */}
        <div className="relative max-w-md w-full">
          <input
            type="text"
            placeholder="Search models..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" size={20} />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
        {/* Filters Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-xl shadow-lg sticky top-24">
            <ModelFilters />
          </div>
        </div>
        {/* Models Grid */}
        <div className="lg:col-span-3">
          {models.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {models.map(model => (
                <ModelCard key={model.id} model={model} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-lg text-neutral-500">No models found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;