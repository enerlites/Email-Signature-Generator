'use client';

import { useState } from 'react';
import TopGreenerSignatureForm from './SignatureForm';
import LiderSignatureForm from './LiderSignatureForm';

export default function SignatureSelector() {
  const [selectedCompany, setSelectedCompany] = useState('topgreener');

  return (
    <div>
      <div className="flex justify-center mb-8">
        <button
          onClick={() => setSelectedCompany('topgreener')}
          className={`px-4 py-2 rounded-l-lg ${
            selectedCompany === 'topgreener' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'
          }`}
        >
          Top Greener
        </button>
        <button
          onClick={() => setSelectedCompany('lider')}
          className={`px-4 py-2 rounded-r-lg ${
            selectedCompany === 'lider' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
          }`}
        >
          Lider Electric
        </button>
      </div>
      {selectedCompany === 'topgreener' ? (
        <TopGreenerSignatureForm company={selectedCompany} />
      ) : (
        <LiderSignatureForm company={selectedCompany} />
      )}
    </div>
  );
}