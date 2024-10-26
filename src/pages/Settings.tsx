import React from 'react';
import { Bell, Moon, Globe, Lock } from 'lucide-react';

export const Settings: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-6 bg-blue-600">
          <h1 className="text-2xl font-bold text-white">Settings</h1>
          <p className="text-blue-100 mt-2">
            Customize your HealthChat experience
          </p>
        </div>
        <div className="p-6">
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-lg font-semibold mb-4 flex items-center">
                <Bell className="w-5 h-5 mr-2" />
                Notifications
              </h2>
              <div className="space-y-4">
                <label className="flex items-center">
                  <input type="checkbox" className="rounded text-blue-600" />
                  <span className="ml-2">Enable push notifications</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="rounded text-blue-600" />
                  <span className="ml-2">Email notifications</span>
                </label>
              </div>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-lg font-semibold mb-4 flex items-center">
                <Moon className="w-5 h-5 mr-2" />
                Appearance
              </h2>
              <div className="space-y-4">
                <label className="flex items-center">
                  <input type="checkbox" className="rounded text-blue-600" />
                  <span className="ml-2">Dark mode</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="rounded text-blue-600" />
                  <span className="ml-2">High contrast</span>
                </label>
              </div>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-lg font-semibold mb-4 flex items-center">
                <Globe className="w-5 h-5 mr-2" />
                Language
              </h2>
              <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 rounded-md">
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
                <option>German</option>
              </select>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-4 flex items-center">
                <Lock className="w-5 h-5 mr-2" />
                Privacy
              </h2>
              <div className="space-y-4">
                <label className="flex items-center">
                  <input type="checkbox" className="rounded text-blue-600" />
                  <span className="ml-2">Share usage data</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="rounded text-blue-600" />
                  <span className="ml-2">Save chat history</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};