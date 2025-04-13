// HomePage.jsx
import React, { useState } from 'react';
import HeroImage from '../src/assets/Images/Hero.png'
import Dack from '../src/assets/Images/Dackhotell.png'
import Service from '../src/assets/Images/Service.png'
import Logo from '../src/assets/Images/Logga_vit.svg'
import FormModal from './Components/FormModal';

// Startsida för Mattssons Garage
const HomePage = () => {
  const [open, setOpen] = useState(false)
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
      <section
        className="bg-gray-900 bg-cover bg-center py-20"
        style={{ backgroundImage: `url(${HeroImage})` }}
      >
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center">
          {/* Textinnehåll */}
          <div className="md:w-1/2 mb-10 md:mb-0 bg-black/60 p-6 rounded-lg">
            <h2 className="text-4xl font-extrabold mb-4">Din verkstad i Kungälv</h2>
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
              src={Logo}
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-900 p-6 rounded-xl shadow hover:shadow-lg transition-shadow">
              <img src={Service} alt="Tjänst 1" className="mx-auto mb-4 rounded" />
              <h4 className="text-xl font-semibold mb-2">Reperation och Service</h4>
              <p className="text-gray-400">Med erfarenhet från de flesta bilmärken och över 30 år i branchen kan du känna dig säker att vi tar hand om din bil på bästa sätt</p>
            <br/><button onClick={() => setOpen(true)} className="bg-blue-500 text-white px-4 py-2 rounded">
              Skicka en bokningförfrågan
            </button>
            <FormModal isOpen={open} onClose={() => setOpen(false)} />
            </div>
            <div className="bg-gray-900 p-6 rounded-xl shadow hover:shadow-lg transition-shadow">
              <img src={Dack} alt="Tjänst 2" className="mx-auto mb-4 rounded" />
              <h4 className="text-xl font-semibold mb-2 text-center">Däckhotell</h4>
              <p className="text-gray-400 whitespace-pre-line">
                Lämna in dina däck hos oss på Mattssons Garage.{"\n\n"}
                <strong>Pris:</strong>{"\n"}
                13–18 tum – 900 kr{"\n"}
                19–24 tum – 1100 kr{"\n\n"}
                <strong>Detta ingår:</strong>{"\n"}
                • 1 st hjulskifte{"\n"}
                • 1 st hjultvätt (grovtvätt){"\n"}
                • Förvaring för en säsong
              </p>
            </div>

          </div>
        </div>
      </section>
      {/* Kart sektion */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-8">Hitta Hit</h3>

          {/* Google Maps */}
          <div className="w-full h-96 rounded-xl overflow-hidden shadow-lg">

            <iframe
              title="Mattssons Garage karta"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d265.4121736724468!2d11.787186577858831!3d57.84720263980198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4645638aed217321%3A0x6ed559b2910ba4f1!2sMattssons%20Garage%20AB!5e0!3m2!1ssv!2sse!4v1744576172416!5m2!1ssv!2sse"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
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
