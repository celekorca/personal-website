'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="bg-white p-8 rounded-xl shadow-xl text-center max-w-md w-full mx-4">
        <div className="text-6xl mb-4 text-blue-500">
          <FontAwesomeIcon icon={faRobot} className="h-16 w-16" />
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Stavri PECI</h1>
        <p className="text-lg text-gray-600 mb-6">Welcome to my personal website</p>
        <div className="text-gray-400 text-sm">
          More coming soon...
        </div>
      </div>
    </div>
  );
}
