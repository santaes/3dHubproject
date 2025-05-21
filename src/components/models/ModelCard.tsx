import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Download } from 'lucide-react';
import { Model } from '../../types';
import { motion } from 'framer-motion';

interface ModelCardProps {
  model: Model;
}

const ModelCard: React.FC<ModelCardProps> = ({ model }) => {
  const primaryImage = model.images.find(img => img.isPrimary) || model.images[0];
  
  return (
    <motion.div 
      className="group rounded-lg overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow duration-300"
      whileHover={{ y: -5 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <Link to={`/model/${model.id}`} className="block">
        <div className="relative h-64 overflow-hidden">
          <img 
            src={primaryImage.url} 
            alt={primaryImage.alt}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white font-medium">By {model.designer.name}</span>
            <div className="flex gap-2">
              <span className="flex items-center text-white">
                <Heart size={16} className="mr-1" />
                {model.likes}
              </span>
              <span className="flex items-center text-white">
                <Download size={16} className="mr-1" />
                {model.downloads}
              </span>
            </div>
          </div>
        </div>
      </Link>
      <div className="p-4">
        <Link to={`/model/${model.id}`} className="block">
          <h3 className="text-lg font-semibold text-neutral-800 line-clamp-1 hover:text-primary-600 transition-colors">
            {model.title}
          </h3>
        </Link>
        <p className="mt-1 text-neutral-600 text-sm line-clamp-2">{model.description}</p>
        <div className="mt-3 flex justify-between items-center">
          <span className="font-bold text-primary-700">
            ${model.price.toFixed(2)}
          </span>
          <div className="text-xs text-neutral-500">
            {new Date(model.createdAt).toLocaleDateString()}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ModelCard;