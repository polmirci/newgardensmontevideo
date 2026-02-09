import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import FadeIn from './FadeIn';

const About: React.FC = () => {
  return (
    <section id="nosotros" className="py-24 bg-white relative overflow-hidden">
        {/* Decorational background element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50 skew-x-12 translate-x-32 z-0 hidden lg:block"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Grid */}
          <div className="w-full lg:w-1/2">
            <FadeIn direction="up">
                <div className="grid grid-cols-2 gap-4">
                    {/* Image 1: Round Topiary Bush / Manicured Garden */}
                    <img 
                        src="https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.6435-9/81529155_680925628980833_1252516814039023616_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=bU6JmK6pkqIQ7kNvwHO-4Z7&_nc_oc=AdkDxmx1T4PBr0Wmv9pqRnxLvN6ZootHhhPfBosH5IZkeJ5D6wZcQsn_DKsChlrv4TzJrBJ_GeLdvTk1ejAG15sp&_nc_zt=23&_nc_ht=scontent.fmvd4-1.fna&_nc_gid=9g1QfeYBYAzNZTX0qCCcdA&oh=00_Afvr9rq7Ghg9qLDofxIOC-7Dxrx6jAr9ySpYSR0NPfefxw&oe=69B1B5F0" 
                        alt="Poda de arbustos y toparios" 
                        className="w-full h-64 object-cover rounded-2xl shadow-lg mt-8"
                    />
                    {/* Image 2: Lush Green Vegetation */}
                    <img 
                        src="https://scontent.fmvd1-1.fna.fbcdn.net/v/t1.6435-9/98119357_772893236450738_5353375670141452288_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=0b6b33&_nc_ohc=QcMoIGKxPVYQ7kNvwEdkIWz&_nc_oc=Adl0sipJ3eAxmVduiAWZv6fOM5yrl2B5RCk_efWDb2u14Bh5MkSLPHxCgpKoubOlSKC7nij4TumZsu6APBt560XN&_nc_zt=23&_nc_ht=scontent.fmvd1-1.fna&_nc_gid=GqO2P1HUx_anFUzAKL-Jsg&oh=00_Aftfegj1xvmyc5i_srCLQuXQF-hyBf_7EQLZXD65pUNZHA&oe=69B1B21E" 
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