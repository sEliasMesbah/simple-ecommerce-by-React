self.addEventListener('install', (e) => {
	e.waitUntil(
		caches.open('app-store').then((cache) => cache.addAll([
			'../../https@w3cart.dexignzone.com\default.htm'
		])),
	);
});

self.addEventListener('fetch', (e) => {
	e.respondWith(
		caches.match(e.request).then(function (response) {
			return response || fetch(e.request);
		})
	);
});