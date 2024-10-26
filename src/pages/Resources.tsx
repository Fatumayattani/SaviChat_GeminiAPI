import React from 'react';
import { ExternalLink, BookOpen, Stethoscope, Microscope } from 'lucide-react';

export const Resources: React.FC = () => {
  const resources = [
    {
      title: 'World Health Organization',
      description: 'Official WHO website with global health information and updates',
      url: 'https://www.who.int',
      icon: <BookOpen className="w-8 h-8 text-blue-600" />,
      image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80'
    },
    {
      title: 'CDC Health Information',
      description: 'Comprehensive health resources from the Centers for Disease Control',
      url: 'https://www.cdc.gov',
      icon: <Stethoscope className="w-8 h-8 text-blue-600" />,
      image: 'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&q=80'
    },
    {
      title: 'MedlinePlus',
      description: 'Trusted health information from the National Library of Medicine',
      url: 'https://medlineplus.gov',
      icon: <Microscope className="w-8 h-8 text-blue-600" />,
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80'
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="relative h-48">
          <img
            src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80"
            alt="Medical research"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-600/75 flex items-center">
            <div className="px-6">
              <h1 className="text-2xl font-bold text-white">Health Resources</h1>
              <p className="text-blue-100 mt-2">
                Curated collection of reliable health information sources
              </p>
            </div>
          </div>
        </div>
        <div className="p-6">
          <div className="grid gap-6">
            {resources.map((resource) => (
              <a
                key={resource.title}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="relative h-48 md:h-full">
                    <img
                      src={resource.image}
                      alt={resource.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:col-span-2">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="bg-blue-50 p-2 rounded-lg">{resource.icon}</div>
                        <h2 className="text-xl font-semibold text-gray-800">{resource.title}</h2>
                      </div>
                      <ExternalLink className="w-5 h-5 text-blue-600 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                    <p className="text-gray-600">{resource.description}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};