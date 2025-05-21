import React from 'react';
import { featuredDesigners } from '../data/designers';

const DesignersPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Leading Fashion Designers</h1>
      
      <div className="space-y-12">
        {featuredDesigners.map(designer => (
          <div key={designer.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative h-[400px]">
                <img 
                  src={designer.featuredWorks[0].image} 
                  alt={designer.featuredWorks[0].title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src={designer.image} 
                    alt={designer.name}
                    className="w-20 h-20 rounded-full object-cover border-2 border-primary-100"
                  />
                  <div>
                    <h2 className="text-2xl font-bold">{designer.name}</h2>
                    <p className="text-neutral-600">{designer.company}</p>
                  </div>
                </div>
                
                <p className="text-lg text-neutral-700 mb-6">{designer.bio}</p>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Notable Achievements</h3>
                  <ul className="space-y-2">
                    {designer.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-center gap-2 text-neutral-700">
                        <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3">Featured Work</h3>
                  {designer.featuredWorks.map(work => (
                    <div key={work.id} className="space-y-2">
                      <h4 className="font-medium">{work.title}</h4>
                      <p className="text-neutral-600">{work.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {work.printerCompatibility.map((printer, index) => (
                          <span 
                            key={index}
                            className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm"
                          >
                            {printer}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesignersPage;