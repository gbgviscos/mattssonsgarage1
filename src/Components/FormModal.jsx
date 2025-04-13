import React, { useState } from 'react';

const FormModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
      <div className="bg-white text-black rounded-xl w-full max-w-lg p-6 relative">
        <button onClick={onClose} className="absolute top-3 right-3 text-xl font-bold">×</button>

        <h2 className="text-2xl font-semibold mb-4">Boka en tjänst</h2>

        <form action="https://formspree.io/f/your_form_id" method="POST" encType="multipart/form-data">
          <label className="block mb-2">Registreringsnummer *</label>
          <input name="regnr" required className="input" />

          <label className="block mt-4 mb-2">Miltal</label>
          <select name="miltal" className="input">
            <option>0 - 2999 mil</option>
            <option>3000 - 3499 mil</option>
            <option>3500 - 3999 mil</option>
            <option>4000 - 4499 mil</option>
            <option>4500 - 4999 mil</option>
            <option>5000 - 5499 mil</option>
            <option>5500 - 5999 mil</option>
            <option>6000 - 6499 mil</option>
            <option>6500 - 6999 mil</option>
            <option>7000 - 7499 mil</option>
            <option>7500 - 7999 mil</option>
            <option>8000 - 8499 mil</option>
            <option>8500 - 8999 mil</option>
            <option>9000 - 9499 mil</option>
            <option>9500 - 9999 mil</option>
            <option>10000 - 10499 mil</option>
            <option>10500 - 10999 mil</option>
            <option>11000 - 11499 mil</option>
            <option>11500 - 11999 mil</option>
            <option>12000 - 12499 mil</option>
            <option>12500 - 12999 mil</option>
            <option>13000 - 13499 mil</option>
            <option>13500 - 13999 mil</option>
            <option>14000 - 14499 mil</option>
            <option>14500 - 14999 mil</option>
            <option>15000 - 15999 mil</option>
            <option>16000 - 16999 mil</option>
            <option>17000 - 17999 mil</option>
            <option>18000 - 18999 mil</option>
            <option>19000 - 19999 mil</option>
            <option>20000 - 20999 mil</option>
            <option>21000 - 21999 mil</option>
            <option>22000 - 22999 mil</option>
            <option>23000 - 23999 mil</option>
            <option>24000 - 24999 mil</option>
            <option>25000 - 25999 mil</option>
            <option>26000 - 26999 mil</option>
            <option>27000 - 27999 mil</option>
            <option>28000 - 28999 mil</option>
            <option>29000 - 29999 mil</option>
            <option>30000 - 30999 mil</option>
            <option>31000 - 31999 mil</option>
            <option>32000 - 32999 mil</option>
            <option>33000 - 33999 mil</option>
            <option>34000 - 34999 mil</option>
            <option>35000 - 35999 mil</option>
            <option>36000 - 36999 mil</option>
            <option>37000 - 37999 mil</option>
            <option>38000 - 38999 mil</option>
            <option>39000 - 39999 mil</option>
            <option>40000 - eller mer</option>
          </select>

          <label className="block mt-4 mb-2">Hur kan vi hjälpa dig?</label>
          <select name="tjänst" className="input">
            <option>Service</option>
            <option>Diagnostik</option>
            <option>Reperation</option>
            <option>Annat</option>
          </select>

          <label className="block mt-4 mb-2">Namn *</label>
          <input name="namn" required className="input" />

          <label className="block mt-4 mb-2">E-post *</label>
          <input name="email" type="email" required className="input" />

          <label className="block mt-4 mb-2">Telefon</label>
          <input name="telefon" className="input" />

          <label className="block mt-4 mb-2">Upplysningar</label>
          <textarea name="meddelande" className="input" rows="4" placeholder="Skriv ett meddelande..."></textarea>

          <button type="submit" className="bg-blue-600 text-white mt-6 px-4 py-2 rounded hover:bg-blue-700 w-full">
            Skicka →
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormModal;
