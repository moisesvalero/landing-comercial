import { landingDefaults } from '$lib/data/landing-defaults';
import type { PageServerLoad } from './$types';

const site = {
  header: {
    logoText: 'Landing comercial'
  },
  footer: {
    emailHref: 'mailto:info@example.com'
  }
};

export const load: PageServerLoad = () => {
  return {
    landing: landingDefaults,
    site
  };
};
