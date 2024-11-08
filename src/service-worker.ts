/// <reference lib="webworker" />

declare const self: ServiceWorkerGlobalScope;

// Basic service worker for offline functionality
self.addEventListener('install', (event: ExtendableEvent) => {
  event.waitUntil(
    caches.open('digimart-v1').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        // Add other important assets
      ]);
    })
  );
}); 