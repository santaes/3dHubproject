import React from 'react';
import { featuredBrands } from '../data/designers';

const BrandsPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-12">Leading Fashion Brands</h1>
      <div className="grid md:grid-cols-2 gap-12">
        {featuredBrands.map(brand => (
          <div key={brand.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative h-[400px] flex items-center justify-center bg-neutral-100">
                <img 
                  src={brand.image} 
                  alt={brand.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src={brand.image} 
                    alt={brand.name}
                    className="w-20 h-20 rounded-full object-cover border-2 border-neutral-200"
                  />
                  <div>
                    <h2 className="text-2xl font-bold">{brand.name}</h2>
                    {('company' in brand && brand.company) && (
                      <p className="text-neutral-600">{brand.company}</p>
                    )}
                  </div>
                </div>
                {('bio' in brand && brand.bio) ? (
                  <p className="text-lg text-neutral-700 mb-6">{brand.bio}</p>
                ) : (
                  <p className="text-neutral-400 mb-6 italic">No bio available.</p>
                )}
                {('achievements' in brand && Array.isArray(brand.achievements) && brand.achievements.length > 0) && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3">Innovations & Achievements</h3>
                    <ul className="space-y-2">
                      {brand.achievements.map((achievement: string, index: number) => (
                        <li key={index} className="flex items-center gap-2 text-neutral-700">
                          <span className="w-2 h-2 bg-black rounded-full"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {('featuredWorks' in brand && Array.isArray(brand.featuredWorks) && brand.featuredWorks.length > 0) && (
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Featured Products</h3>
                    {brand.featuredWorks.map((work: any) => (
                      <div key={work.id} className="space-y-2">
                        <h4 className="font-medium">{work.title}</h4>
                        <p className="text-neutral-600">{work.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {work.printerCompatibility.map((printer: string, index: number) => (
                            <span 
                              key={index}
                              className="px-3 py-1 bg-neutral-100 text-black rounded-full text-sm"
                            >
                              {printer}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandsPage;