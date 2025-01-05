import type { PageLoad } from './$types';
import type { Painting } from '$mytypes/Painting';
import { error } from '@sveltejs/kit'
import paintings from '$assets/paintings.json';

export const ssr = true; 
export const csr = true;

export const load: PageLoad = async() => {
  if (!paintings) {
    throw error(404, 'We could not find any painting.');
  }
  return {
    paintings: paintings as Painting[],
  }
}
