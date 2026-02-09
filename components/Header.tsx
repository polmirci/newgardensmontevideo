import React, { useState, useEffect } from 'react';
import { Menu, X, Leaf } from 'lucide-react';
import { NAV_ITEMS, COMPANY_NAME, WHATSAPP_LINK } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsOpen(false);
    }
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a 
          href="#inicio" 
          onClick={(e) => handleNavClick(e, '#inicio')}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="bg-[#00D646] p-1.5 rounded-lg group-hover:scale-110 transition-transform">
            <Leaf className="w-6 h-6 text-black" />
          </div>
          <span className="text-white font-bold text-xl tracking-tight">
            New Garden <span className="text-[#00D646]">MVD</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-gray-300 hover:text-[#00D646] font-medium transition-colors text-sm uppercase tracking-wide cursor-pointer"
            >
              {item.label}
            </a>
          ))}
          <a 
            href={WHATSAPP_LINK}
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#00D646] text-black font-bold px-5 py-2.5 rounded-full hover:bg-[#00b53b] transition-all transform hover:-translate-y-0.5 shadow-[0_0_15px_rgba(0,214,70,0.3)] text-sm"
          >
            Presupuesto GRATIS
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-2 hover:text-[#00D646] transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-zinc-900/95 backdrop-blur-xl border-t border-zinc-800 transition-all duration-300 overflow-hidden ${
        isOpen ? 'max-h-screen py-8' : 'max-h-0'
      }`}>
        <div className="container mx-auto px-6 flex flex-col gap-6">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-white text-lg font-medium hover:text-[#00D646]"
            >
              {item.label}
            </a>
          ))}
          <a 
            href={WHATSAPP_LINK}
            target="_blank" 
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="bg-[#00D646] text-black font-bold py-3 text-center rounded-lg mt-4"
          >
            Solicitar Presupuesto
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;