import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import FadeIn from './FadeIn';

const About: React.FC = () => {
  return (
    <section id="nosotros" className="py-24 bg-white relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Grid */}
          <div className="w-full lg:w-1/2">
            <FadeIn direction="up">
                <div className="grid grid-cols-2 gap-4">
                    {/* Image 1: Round Topiary Bush / Manicured Garden */}
                    <img 
                        src="https://images.unsplash.com/photo-1734079692079-172d8243ebd3?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                        alt="Poda de arbustos y toparios" 
                        className="w-full h-64 object-cover rounded-2xl shadow-lg mt-8"
                    />
                    {/* Image 2: Lush Green Vegetation */}
                    <img 
                        src="https://images.unsplash.com/photo-1734079692079-aae7e24a7035?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                        alt="Mantenimiento de jardines y cercos" 
                        className="w-full h-64 object-cover rounded-2xl shadow-lg"
                    />
                    <div className="col-span-2 bg-zinc-900 rounded-2xl p-8 flex flex-col justify-center items-center text-center shadow-xl">
                        <span className="text-[#00D646] text-5xl font-bold mb-2">10+</span>
                        <span className="text-white font-medium">Años de Experiencia en Montevideo</span>
                    </div>
                </div>
            </FadeIn>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <FadeIn delay={200}>
              <span className="text-[#00D646] font-bold tracking-widest uppercase text-sm mb-4 block">Sobre Nosotros</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Jardinería Experta, <br/>Personalizada para Vos.
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                En New Garden, creamos y mantenemos espacios verdes hermosos y funcionales con cuidado y experiencia. Desde el diseño hasta el mantenimiento, nuestro equipo brinda soluciones profesionales de jardinería adaptadas a tu hogar o negocio, asegurando que cada jardín luzca impecable durante todo el año.
              </p>

              <ul className="space-y-4 mb-10">
                {[
                  "Personal capacitado y asegurado",
                  "Equipamiento de última generación",
                  "Compromiso con la puntualidad",
                  "Presupuestos claros y sin sorpresas"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="text-[#00D646] flex-shrink-0" size={20} />
                    <span className="text-gray-800 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;