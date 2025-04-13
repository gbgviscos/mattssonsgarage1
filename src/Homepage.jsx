// HomePage.jsx
import React from 'react';

// Startsida för Mattssons Garage
const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Sidhuvud */}
      <header className="bg-gray-800 p-6 shadow-md">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <h1 className="text-3xl font-bold text-white">Mattssons Garage</h1>
          <nav className="mt-4 md:mt-0 space-x-4">
            {/* Länkar för framtida navigation */}
            <a href="#" className="text-gray-300 hover:text-white">Hem</a>
            <a href="#" className="text-gray-300 hover:text-white">Tjänster</a>
            <a href="#" className="text-gray-300 hover:text-white">Om oss</a>
            <a href="#" className="text-gray-300 hover:text-white">Kontakt</a>
          </nav>
        </div>
      </header>

      {/* Hero-sektion med bild och text */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center">
          {/* Textinnehåll */}
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-4xl font-extrabold mb-4">Digital verkstad för framtiden</h2>
            <p className="text-gray-300 mb-6">
  Med över 30 års erfarenhet i fordonsbranschen – från egen bilverkstad till ledande roller på Volvo och som Verkstadschef på MLS – kombinerar vi djup teknisk kunskap med genuin passion för bilar. Mattssons Garage står för kvalitet, effektivitet och glädjen i att lösa problem på riktigt.
</p>

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg">
              Läs mer
            </button>
          </div>

          {/* Bild (placeholder just nu) */}
          <div className="md:w-1/2">
            <img 
              src="https://via.placeholder.com/500x300" 
              alt="Hero-bild för Mattssons Garage"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Tjänstesektion */}
      <section className="bg-gray-800 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-8">Våra Tjänster</h3>

          {/* Tjänstekort */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-6 rounded-xl shadow hover:shadow-lg transition-shadow">
              <img src="https://via.placeholder.com/150" alt="Tjänst 1" className="mx-auto mb-4 rounded" />
              <h4 className="text-xl font-semibold mb-2">Reperation</h4>
              <p className="text-gray-400">Med erfarenhet från de flesta bilmärken och över 30 år i branchen kan du känna dig säker att vi tar hand om din bil på bästa sätt</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl shadow hover:shadow-lg transition-shadow">
              <img src="https://via.placeholder.com/150" alt="Tjänst 2" className="mx-auto mb-4 rounded" />
              <h4 className="text-xl font-semibold mb-2">Däckhotell</h4>
              <p className="text-gray-400">Slipp problemen med att byta däck!, lämna in dina däck till oss för förvaring till nästa säsong!</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl shadow hover:shadow-lg transition-shadow">
              <img src="https://via.placeholder.com/150" alt="Tjänst 3" className="mx-auto mb-4 rounded" />
              <h4 className="text-xl font-semibold mb-2">Service</h4>
              <p className="text-gray-400">Vi gör service på de flesta bilmärken. Stämpel i boken varje gång!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sidfot */}
      <footer className="bg-gray-900 text-gray-500 text-center py-6">
        © {new Date().getFullYear()} Mattssons Garage. Alla rättigheter förbehållna.
      </footer>
    </div>
  );
};

export default HomePage;
