const CACHE_NAME = 'amplio-app-shell-v3';
const APP_SHELL = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icon-v3.svg',
  './icon-v3-180.png',
  './icon-v3-192.png',
  './icon-v3-512.png'
];
const APP_SCOPE = new URL(self.registration.scope);
const STATIC_FILE = /\.(?:css|js|mjs|svg|png|jpe?g|webp|ico|woff2?|ttf|otf|webmanifest)$/i;

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    await cache.addAll(APP_SHELL);
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const cacheNames = await caches.keys();
    await Promise.all(cacheNames
      .filter(name => (
        name === 'amplio-demo-v1' ||
        (name.startsWith('amplio-app-shell-') && name !== CACHE_NAME)
      ))
      .map(name => caches.delete(name)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.origin !== APP_SCOPE.origin || !url.pathname.startsWith(APP_SCOPE.pathname)) return;

  const isPage = request.mode === 'navigate';
  const isStaticAsset = STATIC_FILE.test(url.pathname);
  if (!isPage && !isStaticAsset) return;

  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    try {
      // Check the live site first so published changes appear on the next visit.
      const response = await fetch(request, { cache: 'no-cache' });
      if (response.ok) await cache.put(request, response.clone());
      return response;
    } catch {
      const savedResponse = await cache.match(request);
      if (savedResponse) return savedResponse;

      if (isPage) {
        const savedHome = await cache.match(new URL('./index.html', APP_SCOPE).href);
        if (savedHome) return savedHome;
      }

      return new Response('You appear to be offline. Reconnect and try again.', {
        status: 503,
        statusText: 'Offline',
        headers: { 'Content-Type': 'text/plain; charset=utf-8' }
      });
    }
  })());
});
