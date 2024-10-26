import React from 'react';
import { Shield, Brain, MessageSquare, Heart } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="relative h-64">
          <img
            src="https://images.unsplash.com/photo-1504813184591-01572f98c85f?auto=format&fit=crop&q=80"
            alt="Medical technology"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-600/75 flex items-center">
            <div className="px-6">
              <h1 className="text-3xl font-bold text-white mb-2">About HealthChat</h1>
              <p className="text-blue-100">
                Learn more about our mission and commitment to health information
              </p>
            </div>
          </div>
        </div>
        
        <div className="p-6">
          <div className="prose max-w-none">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-gray-50 rounded-lg transform hover:-translate-y-1 transition-all duration-300">
                <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h2 className="text-xl font-semibold mb-2">Privacy First</h2>
                <p className="text-gray-600">Your health information stays private and secure</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg transform hover:-translate-y-1 transition-all duration-300">
                <Brain className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h2 className="text-xl font-semibold mb-2">AI-Powered</h2>
                <p className="text-gray-600">Advanced AI technology for accurate information</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg transform hover:-translate-y-1 transition-all duration-300">
                <MessageSquare className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h2 className="text-xl font-semibold mb-2">24/7 Support</h2>
                <p className="text-gray-600">Always available to answer your questions</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-gray-600">
                  HealthChat is committed to making reliable health information accessible to everyone.
                  We combine advanced AI technology with trusted medical resources to provide accurate,
                  up-to-date health information and guidance.
                </p>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&q=80"
                  alt="Healthcare professional"
                  className="rounded-lg shadow-lg"
                />
                <div className="absolute -bottom-4 -right-4 bg-blue-50 p-4 rounded-full shadow-lg">
                  <Heart className="w-8 h-8 text-blue-600 animate-pulse" />
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">How We Help</h2>
              <p className="text-gray-700">
                Our AI-powered chat system provides instant responses to your health queries,
                helping you understand symptoms, learn about conditions, and make informed
                decisions about your health. Remember, we're here to provide information,
                not to replace professional medical advice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};