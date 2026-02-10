import { Trees, Scissors, Shovel, Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';
import { ServiceItem, NavItem, SocialLink } from './types';

export const COMPANY_NAME = "New Garden Montevideo";
export const PHONE_NUMBER = "(099) 958 565";
export const EMAIL_ADDRESS = "newgardenmontevideo@gmail.com";
export const ADDRESS = "Montevideo, Uruguay";
export const WHATSAPP_LINK = "https://wa.me/59899958565";

export const NAV_ITEMS: NavItem[] = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Sobre Nosotros', href: '#nosotros' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Contacto', href: '#contacto' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 1,
    title: "Poda y Tala de Árboles",
    description: "Servicio especializado en altura con equipos de seguridad certificados. Reducción de copa, limpieza y talas complejas.",
    icon: Trees
  },
  {
    id: 2,
    title: "Poda y Tala de Palmeras",
    description: "Mantenimiento estético y sanitario de palmeras. Limpieza de tronco y control de plagas con técnicas profesionales.",
    icon: Scissors
  },
  {
    id: 3,
    title: "Mantenimiento de Áreas Verdes",
    description: "Cuidado integral de jardines residenciales y comerciales. Corte de césped, fertilización y diseño paisajista.",
    icon: Shovel
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'Facebook', href: '#', icon: Facebook },
  { name: 'Instagram', href: '#', icon: Instagram },
];