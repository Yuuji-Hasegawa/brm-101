const CACHE_VERSION = '20YY-mm-dd-n';
const CACHE_TARGET = 'brm-101';
const CACHE_NAME = `${CACHE_TARGET}-${CACHE_VERSION}`;
const OFFLINE_URL = '/';
const urlsToCache = [
	'/css/style.css',
	'/js/app.js',
	OFFLINE_URL
];

self.addEventListener('install', (event) => {
	event.waitUntil(
		caches.open(CACHE_NAME).then((cache) => {
			return cache.addAll(urlsToCache);
		}),
	);
});

self.addEventListener('activate', (event) => {
	event.waitUntil(
		caches
			.keys()
			.then((keys) =>
				Promise.all(
					keys.map((key) => {
						if (CACHE_NAME !== key) {
							return caches.delete(key);
						}
					}),
				),
			)
			.then(() => {
				self.clients.claim();
			}),
	);
});

self.addEventListener('fetch', (e) => {
	e.respondWith(
		caches
			.match(e.request)
			.then((response) => {
				return (
					response ||
					fetch(e.request).then(async (response) => {
						const cache = await caches.open(CACHE_NAME);
						cache.put(e.request, response.clone());
						return response;
					})
				);
			})
			.catch(() => {
				return caches.match(OFFLINE_URL);
			}),
	);
});
