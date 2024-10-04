import Image from 'next/image';
import SignatureSelector from './components/SignatureSelector';

export default function Home() {
  return (
    <div className="min-h-screen p-8 bg-white flex items-center justify-center">
      <main className="w-full max-w-6xl">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800 flex items-center justify-center">
          Signature Generator
        </h1>
        <SignatureSelector />
      </main>
    </div>
  );
}