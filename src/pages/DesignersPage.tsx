import React from 'react';
import { featuredDesigners } from '../data/designers';

const DesignersPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-12">Leading Fashion Designers</h1>
      <div className="grid md:grid-cols-2 gap-12">
        {featuredDesigners.map(designer => (
          <div key={designer.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative h-[400px] flex items-center justify-center bg-neutral-100">
                <img 
                  src={designer.image} 
                  alt={designer.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src={designer.image} 
                    alt={designer.name}
                    className="w-20 h-20 rounded-full object-cover border-2 border-neutral-200"
                  />
                  <div>
                    <h2 className="text-2xl font-bold">{designer.name}</h2>
                    {('company' in designer && designer.company) && (
                      <p className="text-neutral-600">{designer.company}</p>
                    )}
                  </div>
                </div>
                {('bio' in designer && designer.bio) ? (
                  <p className="text-lg text-neutral-700 mb-6">{designer.bio}</p>
                ) : (
                  <p className="text-neutral-400 mb-6 italic">No bio available.</p>
                )}
                {('achievements' in designer && Array.isArray(designer.achievements) && designer.achievements.length > 0) && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3">Notable Achievements</h3>
                    <ul className="space-y-2">
                      {designer.achievements.map((achievement: string, index: number) => (
                        <li key={index} className="flex items-center gap-2 text-neutral-700">
                          <span className="w-2 h-2 bg-black rounded-full"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {('featuredWorks' in designer && Array.isArray(designer.featuredWorks) && designer.featuredWorks.length > 0) && (
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Featured Work</h3>
                    {designer.featuredWorks.map((work: any) => (
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

export default DesignersPage;