import { writable } from 'svelte/store';

export const pages = writable({
  currentPage: 1,
  pages: []
});