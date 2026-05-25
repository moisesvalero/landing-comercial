import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async () => {
  return json({
    ok: false,
    error: 'El analizador no esta conectado en esta copia independiente.'
  });
};
