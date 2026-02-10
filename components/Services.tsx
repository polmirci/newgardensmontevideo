import React from 'react';
import { SERVICES } from '../constants';
import FadeIn from './FadeIn';

const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-24 bg-zinc-900 text-white relative z-20 -mt-4">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <FadeIn>
            <span className="text-[#00D646] font-bold tracking-widest uppercase text-sm mb-4 block">Nuestros Servicios</span>
            <h2 className="text-4xl font-bold mb-6">Soluciones Integrales para tu Jardín</h2>
            <p className="text-gray-400 text-lg">
                Ofrecemos un abanico completo de servicios para mantener tus espacios verdes en óptimas condiciones, con la seguridad y el profesionalismo que nos caracteriza.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <FadeIn key={service.id} delay={index * 100} className="h-full">
              <div className="bg-zinc-800/50 border border-zinc-700 p-8 rounded-2xl hover:border-[#00D646] transition-colors group h-full flex flex-col">
                <div className="bg-zinc-900 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#00D646] transition-colors">
                  <service.icon className="text-[#00D646] group-hover:text-black transition-colors" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-[#00D646] transition-colors">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed flex-grow">
                  {service.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;