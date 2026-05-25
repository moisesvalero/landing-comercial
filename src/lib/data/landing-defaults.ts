import type { LandingPageData } from '$lib/types/landing';
import { landingBaseDefaults } from './landing-base-defaults';

export const landingDefaults: LandingPageData = {
  ...landingBaseDefaults,
  seo: {
    ...landingBaseDefaults.seo,
    title: 'Diseno web profesional para captar clientes | Moises Valero',
    description:
      'Servicio de diseno web orientado a conversion, velocidad y SEO. Desarrollo web profesional con enfoque en negocio, rendimiento y soporte real.',
    ogTitle: 'Diseno web profesional para empresas y profesionales',
    ogDescription:
      'Landings y webs corporativas con enfoque comercial, SEO y mantenimiento continuo para crecer a nivel nacional.',
    canonicalPath: '/diseno-web'
  },
  hero: {
    ...landingBaseDefaults.hero,
    badge: 'Diseno web profesional en toda Espana',
    title: 'Diseno web profesional'
  },
  services: {
    ...landingBaseDefaults.services,
    heading: 'Servicios de diseno web'
  },
  benefits: {
    ...landingBaseDefaults.benefits,
    heading: 'Diseno webs que impulsan negocios'
  },
  finalCta: {
    ...landingBaseDefaults.finalCta,
    heading: 'Hablamos de tu proyecto web'
  }
};
