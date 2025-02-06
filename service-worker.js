// service-worker.js

const CACHE_NAME = "bewerbungs-tracker-cache-v1";
const urlsToCache = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icon-512.png",
  "https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap",
  "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"
];

// Installations-Ereignis: Dateien cachen
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log("Cache geöffnet");
      return cache.addAll(urlsToCache);
    })
  );
});

// Fetch-Ereignis: Antworten aus dem Cache liefern, falls vorhanden
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

// Activate-Ereignis: Alte Caches löschen
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log("Lösche alten Cache:", cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});