importScripts("https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.sw.js");

self.addEventListener('fetch', e => {
  if (e.request.method === 'GET') e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
