import React from 'react';
import { AlertTriangle } from 'lucide-react';

export const DisclaimerBanner: React.FC = () => {
  return (
    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
      <div className="flex items-start">
        <AlertTriangle className="h-5 w-5 text-yellow-400 mt-0.5" />
        <div className="ml-3">
          <h3 className="text-sm font-medium text-yellow-800">Medical Disclaimer</h3>
          <p className="mt-1 text-sm text-yellow-700">
            This AI assistant provides general information only and should not be used as a substitute for professional medical advice. Always consult with a qualified healthcare provider for medical concerns.
          </p>
        </div>
      </div>
    </div>
  );
};