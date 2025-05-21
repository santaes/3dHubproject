import React, { useMemo } from 'react';
import { useModelStore } from '../../store/useModelStore';
import { FilterOptions } from '../../types';

const ModelFilters: React.FC = () => {
  const { filters, setFilters, models } = useModelStore();

  // Gather unique designers with name and picture
  const designerOptions = useMemo(() => {
    const map = new Map<string, { name: string; picture?: string }>();
    models.forEach(m => {
      if (m.designer?.name) {
        map.set(m.designer.name, {
          name: m.designer.name,
          picture: m.designer.picture || undefined,
        });
      }
    });
    return Array.from(map.values());
  }, [models]);
  
  const handlePriceChange = (min: number, max: number) => {
    setFilters({ priceRange: [min, max] });
  };
  
  const handleTagToggle = (tag: string) => {
    const currentTags = filters.tags;
    const newTags = currentTags.includes(tag)
      ? currentTags.filter(t => t !== tag)
      : [...currentTags, tag];
    setFilters({ tags: newTags });
  };
  
  const handleSortChange = (sortBy: FilterOptions['sortBy']) => {
    setFilters({ sortBy });
  };
  
  // Designer filter handler
  const handleDesignerChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters({ designer: e.target.value });
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-medium mb-2">Designer</h3>
        <div className="relative mb-4">
          <select
            value={filters.designer || ''}
            onChange={handleDesignerChange}
            className="w-full px-3 py-2 border rounded appearance-none pr-10"
            style={{ WebkitAppearance: 'none', MozAppearance: 'none', appearance: 'none' }}
          >
            <option value="">All Designers</option>
            {designerOptions.map(designer => (
              <option key={designer.name} value={designer.name}>{designer.name}</option>
            ))}
          </select>
          {/* Custom dropdown visuals */}
          {filters.designer && (
            <div className="absolute left-2 top-2 flex items-center pointer-events-none">
              <img
                src={designerOptions.find(d => d.name === filters.designer)?.picture || '/default-avatar.png'}
                alt={filters.designer}
                className="h-6 w-6 rounded-full object-cover border border-neutral-200 mr-2"
                style={{ background: '#fff' }}
              />
            </div>
          )}
          <svg className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>
        </div>
      </div>
      <div>
        <h3 className="font-medium mb-2">Price Range</h3>
        <div className="flex gap-2">
          <input
            type="number"
            min={0}
            max={filters.priceRange[1]}
            value={filters.priceRange[0]}
            onChange={(e) => handlePriceChange(Number(e.target.value), filters.priceRange[1])}
            className="w-24 px-2 py-1 border rounded"
          />
          <span>to</span>
          <input
            type="number"
            min={filters.priceRange[0]}
            value={filters.priceRange[1]}
            onChange={(e) => handlePriceChange(filters.priceRange[0], Number(e.target.value))}
            className="w-24 px-2 py-1 border rounded"
          />
        </div>
      </div>

      <div>
        <h3 className="font-medium mb-2">Sort By</h3>
        <select
          value={filters.sortBy}
          onChange={(e) => handleSortChange(e.target.value as FilterOptions['sortBy'])}
          className="w-full px-3 py-2 border rounded"
        >
          <option value="newest">Newest First</option>
          <option value="popular">Most Popular</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>

      <div>
        <h3 className="font-medium mb-2">Categories</h3>
        {['dress', 'jacket', 'shoes', 'accessories'].map(tag => (
          <label key={tag} className="flex items-center gap-2 mb-2">
            <input
              type="checkbox"
              checked={filters.tags.includes(tag)}
              onChange={() => handleTagToggle(tag)}
              className="rounded text-primary-600"
            />
            <span className="capitalize">{tag}</span>
          </label>
        ))}
      </div>

      <div>
        <h3 className="font-medium mb-2">Printer Type</h3>
        {['FDM-ready', 'SLA-ready', 'multi-material'].map(tag => (
          <label key={tag} className="flex items-center gap-2 mb-2">
            <input
              type="checkbox"
              checked={filters.tags.includes(tag)}
              onChange={() => handleTagToggle(tag)}
              className="rounded text-primary-600"
            />
            <span className="capitalize">{tag.replace('-', ' ')}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default ModelFilters;