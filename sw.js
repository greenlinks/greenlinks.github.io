/* Greenlinks: lets the site be installed (NANO full screen) and shows a simple page when offline. Network first, nothing cached. */
self.addEventListener("install", function () { self.skipWaiting(); });
self.addEventListener("activate", function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener("fetch", function (e) {
  if (e.request.mode !== "navigate") return;
  e.respondWith(fetch(e.request).catch(function () {
    return new Response('<!doctype html><meta name="viewport" content="width=device-width,initial-scale=1"><title>Offline</title><body style="margin:0;display:grid;place-items:center;height:100vh;background:#050605;color:#9be22d;font:600 14px ui-monospace,monospace;letter-spacing:.2em">OFFLINE · RECONNECT TO PLAY', { headers: { "Content-Type": "text/html; charset=utf-8" } });
  }));
});
