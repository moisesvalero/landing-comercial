/**
 * Capturas y enlaces por defecto para la marquesina del hero en /diseno-web
 * (fallback si la configuracion no tiene ítems). El contenido editable vive en configuracion: hero → Carrusel de trabajos.
 */
import type { LandingHeroMarqueeItem } from '$lib/types/landing';

export type { LandingHeroMarqueeItem } from '$lib/types/landing';

export const landingHeroMarqueeItems: LandingHeroMarqueeItem[] = [
  {
    title: 'NovaKit — landing SvelteKit',
    imageSrc: '/imagenes/captura-novakit_ember.avif',
    imageAlt: 'Captura del proyecto NovaKit',
    href: 'https://novakit.moisesvalero.es'
  },
  {
    title: 'Galería Nova — e-commerce de arte',
    imageSrc: '/imagenes/galeria-nova-.jpeg',
    imageAlt: 'Captura del proyecto Galería Nova',
    href: 'https://galerianova.es'
  },
  {
    title: 'Ember & Iron — asador premium',
    imageSrc: '/imagenes/Captura-de-pantalla_27-2-2026_114525_moisesvalero.es_.jpeg',
    imageAlt: 'Captura del proyecto Ember & Iron',
    href: 'https://ember.moisesvalero.es'
  },
  {
    title: 'V-Shield — cybersecurity',
    imageSrc: '/imagenes/vshield-1.jpeg',
    imageAlt: 'Captura del proyecto V-Shield',
    href: 'https://v-shield.moisesvalero.es'
  },
  {
    title: 'Chatbot IA — asistente en landing',
    imageSrc: '/imagenes/chatbot.jpeg',
    imageAlt: 'Captura del asistente conversacional',
    href: 'https://moisesvalero.es'
  }
];
