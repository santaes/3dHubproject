import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { featuredDesigners, featuredProducts, featuredBrands } from '../data/designers';
import ModelCard from '../components/models/ModelCard';

const HomePage = () => {
  // Use real designers and models from your data
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation bar is handled globally; this is the main content */}

      {/* Hero Section */}
      <section className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-20 flex flex-col md:flex-row md:justify-between items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">3D FASHION LAB</h1>
            <p className="text-xl mb-8 max-w-xl text-neutral-600">
              Pioneering the future of fashion through 3D printing technology and innovative design.
            </p>
            <Link
              to="/explore"
              className="inline-flex items-center gap-2 bg-black hover:bg-neutral-800 text-white px-8 py-3 rounded-full text-lg font-medium transition-colors"
            >
              Explore Models
              <ArrowRight size={20} />
            </Link>
          </div>
          <img
            src="https://images.pexels.com/photos/7319304/pexels-photo-7319304.jpeg"
            alt="3D Printed Fashion"
            className="w-[300px] h-[400px] object-cover rounded-lg shadow-lg mt-10 md:mt-0"
          />
        </div>
      </section>

      {/* Designers */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Featured Designers</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {featuredDesigners.slice(0, 3).map(designer => (
            <div key={designer.id} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center p-6">
              <img src={designer.image} alt={designer.name} className="w-32 h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-bold mb-2">{designer.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {featuredProducts.map(product => (
            <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-60 object-cover"
              />
              <div className="p-6 flex flex-col gap-2">
                <h3 className="font-bold text-lg">{product.name}</h3>
                <p className="text-neutral-500 text-sm">By {product.designer}</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="bg-black text-white px-3 py-1 rounded-full text-xs">{product.category}</span>
                  <span className="font-semibold text-black">{product.price}</span>
                </div>
                <p className="text-neutral-700 text-sm mt-2">{product.description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {product.printerCompatibility && product.printerCompatibility.map((printer: string, idx: number) => (
                    <span key={idx} className="bg-neutral-100 text-black px-2 py-1 rounded-full text-xs border border-neutral-200">
                      {printer}
                    </span>
                  ))}
                </div>
              </div>
            </div>
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
      <section className="bg-neutral-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose 3D Fashion Lab</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <h3 className="text-xl font-semibold mb-4">Cutting-Edge Designers</h3>
              <p className="text-neutral-600">Showcasing the most innovative minds in fashion, blending technology and creativity.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <h3 className="text-xl font-semibold mb-4">Curated 3D Models</h3>
              <p className="text-neutral-600">Discover unique, high-quality 3D printed pieces ready for your wardrobe or collection.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <h3 className="text-xl font-semibold mb-4">Secure Shopping</h3>
              <p className="text-neutral-600">Enjoy a seamless and secure shopping experience with trusted payment providers.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;