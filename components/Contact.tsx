import React from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { PHONE_NUMBER, EMAIL_ADDRESS, ADDRESS, WHATSAPP_LINK } from '../constants';
import FadeIn from './FadeIn';

const Contact: React.FC = () => {
  return (
    <section id="contacto" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 bg-white rounded-3xl shadow-xl overflow-hidden">
          
          {/* Contact Info Side */}
          <div className="w-full lg:w-2/5 bg-zinc-900 text-white p-10 lg:p-16 flex flex-col justify-between">
            <div>
              <span className="text-[#00D646] font-bold tracking-widest uppercase text-sm mb-4 block">Hablemos</span>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Estamos listos para transformar tu jardín.</h2>
              <p className="text-gray-400 mb-10">
                Contactanos hoy para un presupuesto sin cargo. Respondemos rápido y trabajamos en todo Montevideo y Ciudad de la Costa.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-[#00D646]/10 p-3 rounded-lg">
                  <Phone className="text-[#00D646]" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Llamanos</h4>
                  <p className="text-gray-400">{PHONE_NUMBER}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#00D646]/10 p-3 rounded-lg">
                  <Mail className="text-[#00D646]" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Email</h4>
                  <p className="text-gray-400">{EMAIL_ADDRESS}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#00D646]/10 p-3 rounded-lg">
                  <MapPin className="text-[#00D646]" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Ubicación</h4>
                  <p className="text-gray-400">{ADDRESS}</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
                <a 
                    href={WHATSAPP_LINK} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full bg-[#00D646] text-black font-bold py-4 rounded-xl hover:bg-[#00b53b] transition-colors flex items-center justify-center gap-2"
                >
                    Chat en WhatsApp
                </a>
            </div>
          </div>

          {/* Form Side */}
          <div className="w-full lg:w-3/5 p-10 lg:p-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Envianos un mensaje</h3>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Nombre</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#00D646] focus:ring-1 focus:ring-[#00D646] outline-none transition-all"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Teléfono</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#00D646] focus:ring-1 focus:ring-[#00D646] outline-none transition-all"
                    placeholder="Tu celular"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#00D646] focus:ring-1 focus:ring-[#00D646] outline-none transition-all"
                  placeholder="ejemplo@email.com"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">Servicio de Interés</label>
                <select 
                  id="service" 
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#00D646] focus:ring-1 focus:ring-[#00D646] outline-none transition-all text-gray-600"
                >
                  <option>Seleccionar servicio...</option>
                  <option>Poda de Árboles</option>
                  <option>Tala de Palmeras</option>
                  <option>Mantenimiento de Jardín</option>
                  <option>Otros</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#00D646] focus:ring-1 focus:ring-[#00D646] outline-none transition-all resize-none"
                  placeholder="Contanos brevemente qué necesitás..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="bg-black text-white font-bold py-4 px-8 rounded-xl hover:bg-gray-800 transition-colors flex items-center gap-2"
              >
                Enviar Mensaje
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;