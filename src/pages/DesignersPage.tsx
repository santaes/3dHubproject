import React from 'react';
import { Link } from 'react-router-dom';
import { featuredDesigners } from '../data/designers';

const DesignersPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Why Choose 3D Fashion Lab Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Choose 3D Fashion Lab</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-xl p-8 flex flex-col items-center text-center hover:shadow-2xl transition-shadow">
            <span className="text-5xl mb-4">🧑‍🎨</span>
            <h3 className="text-xl font-semibold mb-2">Cutting-Edge Designers</h3>
            <p className="text-neutral-600">Showcasing the most innovative minds in fashion, blending technology and creativity.</p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-8 flex flex-col items-center text-center hover:shadow-2xl transition-shadow">
            <span className="text-5xl mb-4">🧵</span>
            <h3 className="text-xl font-semibold mb-2">Curated 3D Models</h3>
            <p className="text-neutral-600">Discover unique, high-quality 3D printed pieces ready for your wardrobe or collection.</p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-8 flex flex-col items-center text-center hover:shadow-2xl transition-shadow">
            <span className="text-5xl mb-4">🔒</span>
            <h3 className="text-xl font-semibold mb-2">Secure Shopping</h3>
            <p className="text-neutral-600">Enjoy a seamless and secure shopping experience with trusted payment providers.</p>
          </div>
        </div>
      </section>
      <h1 className="text-4xl font-bold mb-12">Leading Fashion Designers</h1>
      <div className="grid md:grid-cols-2 gap-12">
        {featuredDesigners.map(designer => (
          <Link
            key={designer.id}
            to={`/designer/${designer.id}`}
            className="block group"
            style={{ textDecoration: 'none' }}
          >
            <div className="bg-white rounded-xl shadow-lg overflow-hidden group-hover:shadow-xl transition-shadow">
              <div className="relative h-[400px] flex items-center justify-center bg-neutral-100">
                <img 
                  src={designer.image} 
                  alt={designer.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
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
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DesignersPage;