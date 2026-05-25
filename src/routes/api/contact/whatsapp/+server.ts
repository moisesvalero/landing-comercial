import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

const WHATSAPP_URL = 'https://wa.me/34660471298';

export const GET: RequestHandler = () => {
  redirect(302, WHATSAPP_URL);
};
