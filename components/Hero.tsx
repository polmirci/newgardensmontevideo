import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import FadeIn from './FadeIn';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1558905540-2126cdd54f67?q=80&w=2000&auto=format&fit=crop" 
          alt="Jardinería profesional en Montevideo" 
          className="w-full h-full object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <FadeIn className="max-w-3xl">
          {/* Rating Badge */}
          <div className="flex items-center gap-2 mb-6 bg-white/10 w-fit px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((_, i) => (
                <Star key={i} size={14} className="text-[#00D646] fill-[#00D646]" />
              ))}
            </div>
            <span className="text-white text-xs font-medium tracking-wide">EXCELENCIA EN SERVICIO</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Tu socio de confianza para <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D646] to-emerald-400">espacios verdes</span> excepcionales.
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
            Brindamos soluciones completas, confiables y accesibles de jardinería en Montevideo — desde diseño hasta mantenimiento, asegurando que tus espacios verdes luzcan impecables todo el año.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contacto" 
              className="bg-[#00D646] text-black font-bold text-lg px-8 py-4 rounded-full hover:bg-[#00b53b] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 group"
            >
              Trabajá con Nosotros
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#servicios" 
              className="bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold text-lg px-8 py-4 rounded-full hover:bg-white/20 transition-all flex items-center justify-center"
            >
              Ver Servicios
            </a>
          </div>
        </FadeIn>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-[1px] h-16 bg-gradient-to-b from-[#00D646] to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;