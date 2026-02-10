import React from 'react';
import { Leaf } from 'lucide-react';
import { NAV_ITEMS, SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#101010] text-white pt-20 pb-10 border-t border-zinc-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <a href="#" className="flex items-center gap-2">
              <div className="bg-[#00D646] p-1.5 rounded-lg">
                <Leaf className="w-6 h-6 text-black" />
              </div>
              <span className="text-white font-bold text-xl tracking-tight">
                New Garden <span className="text-[#00D646]">MVD</span>
              </span>
            </a>
            <p className="text-gray-500 text-sm leading-relaxed">
              Profesionales en jardinería, poda y tala en Montevideo. Comprometidos con la excelencia y el cuidado de tus espacios verdes.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold text-lg mb-6">Navegación</h4>
            <ul className="space-y-4">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-gray-500 hover:text-[#00D646] transition-colors text-sm">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal/Services Links (Mock) */}
          <div>
            <h4 className="font-bold text-lg mb-6">Servicios</h4>
            <ul className="space-y-4">
              <li className="text-gray-500 text-sm">Poda de Altura</li>
              <li className="text-gray-500 text-sm">Tala Controlada</li>
              <li className="text-gray-500 text-sm">Diseño de Jardines</li>
              <li className="text-gray-500 text-sm">Limpieza de Terrenos</li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="font-bold text-lg mb-6">Seguinos</h4>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="bg-zinc-900 p-3 rounded-full hover:bg-[#00D646] hover:text-black transition-all group"
                  aria-label={link.name}
                >
                  <link.icon size={20} className="text-gray-400 group-hover:text-black" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm text-center md:text-left w-full">
            &copy; {new Date().getFullYear()} New Garden Montevideo. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;