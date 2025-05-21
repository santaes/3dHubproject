import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { sampleModels } from '../data/models';
import { featuredDesigners, featuredBrands } from '../data/designers';
import ModelCard from '../components/models/ModelCard';

const HomePage = () => {
  const featuredModels = sampleModels.slice(0, 2);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/7319304/pexels-photo-7319304.jpeg"
            alt="3D Printed Fashion"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            The Future of Fashion is Here
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Discover revolutionary 3D-printed fashion from world-leading designers and innovative brands.
          </p>
          <Link
            to="/explore"
            className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-colors"
          >
            Explore Models
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Featured Designers */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Featured Designers</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {featuredDesigners.map(designer => (
            <div key={designer.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64">
                <img 
                  src={designer.featuredWorks[0].image} 
                  alt={designer.featuredWorks[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={designer.image} 
                    alt={designer.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-bold">{designer.name}</h3>
                    <p className="text-neutral-600">{designer.company}</p>
                  </div>
                </div>
                <p className="text-neutral-700 mb-4">{designer.bio}</p>
                <div className="space-y-2">
                  {designer.achievements.slice(0, 2).map((achievement, index) => (
                    <p key={index} className="text-sm text-neutral-600">• {achievement}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Brands */}
      <section className="bg-neutral-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Leading Brands</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredBrands.map(brand => (
              <div key={brand.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-64">
                  <img 
                    src={brand.featuredWorks[0].image} 
                    alt={brand.featuredWorks[0].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{brand.name}</h3>
                  <p className="text-neutral-700 mb-4">{brand.bio}</p>
                  <div className="space-y-2">
                    {brand.achievements.slice(0, 2).map((achievement, index) => (
                      <p key={index} className="text-sm text-neutral-600">• {achievement}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Models */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Featured Models</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {featuredModels.map(model => (
            <ModelCard key={model.id} model={model} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/explore"
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium"
          >
            View All Models
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-neutral-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose 3DHub</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">High-Quality Models</h3>
              <p className="text-neutral-600">All our 3D models are verified for printability and come with detailed printing instructions.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Customizable Designs</h3>
              <p className="text-neutral-600">Modify designs to fit your measurements and style preferences before printing.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Industry Leaders</h3>
              <p className="text-neutral-600">Access designs from world-renowned fashion designers and innovative brands.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;