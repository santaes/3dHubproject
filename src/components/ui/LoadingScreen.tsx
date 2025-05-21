import React from 'react';
import { Loader2 } from 'lucide-react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white">
      <div className="flex flex-col items-center">
        <Loader2 className="h-12 w-12 animate-spin text-primary-600" />
        <h2 className="mt-4 text-xl font-semibold text-neutral-800">Loading...</h2>
      </div>
    </div>
  );
};

export default LoadingScreen;