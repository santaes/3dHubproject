import React from 'react';
import { useParams } from 'react-router-dom';

const ModelDetailPage = () => {
  const { id } = useParams();
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Model Details</h1>
      <p className="mb-4">Viewing details for model ID: {id}</p>
    </div>
  );
};

export default ModelDetailPage;