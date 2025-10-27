// src/lib/emotion-cache.ts
import createCache from '@emotion/cache';

export const muiCache = createCache({
  key: 'css',
  prepend: true,
});
