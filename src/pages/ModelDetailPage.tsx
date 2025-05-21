import React from 'react';
import { useParams } from 'react-router-dom';

import { sampleModels } from '../data/models';

const ModelDetailPage = () => {
  const { id } = useParams();
  const model = sampleModels.find((m) => m.id === id);

  if (!model) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Model Not Found</h1>
        <p className="text-neutral-600">No model with ID: {id}</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row gap-10">
        {/* Images */}
        <div className="flex-1">
          <div className="rounded-xl overflow-hidden shadow-lg mb-4">
            <img src={model.images.find(img => img.isPrimary)?.url || model.images[0].url} alt={model.title} className="w-full h-96 object-cover" />
          </div>
          <div className="flex gap-2">
            {model.images.map(img => (
              <img key={img.id} src={img.url} alt={img.alt} className="w-20 h-20 object-cover rounded-lg border-2" />
            ))}
          </div>
        </div>
        {/* Details */}
        <div className="flex-1 flex flex-col gap-4">
          <h1 className="text-3xl font-bold">{model.title}</h1>
          <div className="flex items-center gap-4">
            <img src={model.designer.picture} alt={model.designer.name} className="w-14 h-14 rounded-full object-cover border-2" />
            <div>
              <p className="font-semibold text-lg">{model.designer.name}</p>
              <p className="text-neutral-500 text-sm">{model.designer.email}</p>
            </div>
          </div>
          <p className="text-neutral-700 text-lg mt-2">{model.description}</p>
          <div className="flex gap-2 flex-wrap mt-2">
            {model.tags.map((tag, idx) => (
              <span key={idx} className="bg-neutral-100 text-black px-3 py-1 rounded-full text-xs border border-neutral-200">{tag}</span>
            ))}
          </div>
          <div className="flex gap-4 mt-2">
            <span className="font-bold text-2xl text-black">${model.price}</span>
            <span className="text-neutral-600 text-sm">Likes: {model.likes}</span>
            <span className="text-neutral-600 text-sm">Downloads: {model.downloads}</span>
          </div>
          <div className="flex gap-2 mt-2 flex-wrap">
            {model.fileFormats.map((fmt, idx) => (
              <span key={idx} className="bg-black text-white px-3 py-1 rounded-full text-xs">{fmt}</span>
            ))}
          </div>
          <div className="flex gap-4 mt-2 text-neutral-500 text-xs">
            <span>Created: {new Date(model.createdAt).toLocaleDateString()}</span>
            <span>Updated: {new Date(model.updatedAt).toLocaleDateString()}</span>
          </div>
          <button className="mt-8 bg-black text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-neutral-800 transition">Download Model</button>
        </div>
      </div>
    </div>
  );
};

export default ModelDetailPage;