import React from 'react';
import { useParams } from 'react-router-dom';
import { featuredDesigners } from '../data/designers';

const DesignerDetailPage = () => {
  const { id } = useParams();
  const designer = featuredDesigners.find((d) => d.id === id);

  if (!designer) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Designer Not Found</h1>
        <p className="text-neutral-600">No designer with ID: {id}</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
        {/* Designer Image */}
        <img
          src={designer.image}
          alt={designer.name}
          className="w-64 h-80 object-cover rounded-xl shadow-lg mb-6 md:mb-0"
        />
        {/* Designer Details */}
        <div className="flex-1 flex flex-col gap-4">
          <h1 className="text-3xl font-bold">{designer.name}</h1>
          {designer.bio && <p className="text-neutral-700 text-lg">{designer.bio}</p>}
          {designer.achievements && designer.achievements.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Achievements</h3>
              <ul className="list-disc ml-6 text-neutral-700">
                {designer.achievements.map((ach, idx) => (
                  <li key={idx}>{ach}</li>
                ))}
              </ul>
            </div>
          )}
          {designer.featuredWorks && designer.featuredWorks.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-2 mt-4">Featured 3D Projects</h3>
              <div className="flex flex-col gap-6">
                {designer.featuredWorks.map((work) => (
                  <div key={work.id} className="p-4 border rounded-lg flex flex-col md:flex-row gap-4 bg-neutral-50">
                    <img src={work.image} alt={work.title} className="w-32 h-32 object-cover rounded-lg" />
                    <div>
                      <h4 className="font-bold text-md mb-1">{work.title}</h4>
                      <p className="text-neutral-700 mb-1">{work.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {work.printerCompatibility.map((printer, idx) => (
                          <span key={idx} className="bg-neutral-200 text-black px-2 py-1 rounded-full text-xs">
                            {printer}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DesignerDetailPage;
