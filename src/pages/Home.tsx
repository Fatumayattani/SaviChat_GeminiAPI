import React from 'react';
import { Heart, Activity, Brain, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
        <div className="space-y-6 animate-fade-in">
          <h1 className="text-5xl font-bold text-gray-800 leading-tight">
            Your Personal <span className="text-blue-600">Health Assistant</span>
          </h1>
          <p className="text-xl text-gray-600">
            Get instant, reliable health information powered by advanced AI technology
          </p>
          <Link
            to="/chat"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-200"
          >
            Start Chat
          </Link>
        </div>
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80"
            alt="Medical professional"
            className="rounded-2xl shadow-2xl animate-float"
          />
          <div className="absolute -bottom-4 -left-4 bg-blue-50 p-4 rounded-lg shadow-lg animate-fade-in-up">
            <Activity className="w-8 h-8 text-blue-600" />
          </div>
          <div className="absolute -top-4 -right-4 bg-blue-50 p-4 rounded-lg shadow-lg animate-fade-in-down">
            <Heart className="w-8 h-8 text-blue-600" />
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
          <div className="bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
            <Brain className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">AI-Powered Insights</h2>
          <p className="text-gray-600">Advanced technology providing accurate health information</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
          <div className="bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
            <Activity className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">24/7 Availability</h2>
          <p className="text-gray-600">Get health information whenever you need it</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
          <div className="bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
            <Users className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Expert Guidance</h2>
          <p className="text-gray-600">Reliable information from trusted medical sources</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="grid md:grid-cols-2">
          <div className="p-8 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose HealthChat?</h2>
            <p className="text-gray-600 mb-6">
              Our AI-powered platform provides instant, accurate health information while maintaining
              your privacy and security. Get reliable guidance anytime, anywhere.
            </p>
            <Link
              to="/about"
              className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center group"
            >
              Learn More
              <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
          <div className="relative h-64 md:h-auto">
            <img
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80"
              alt="Healthcare technology"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};