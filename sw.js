self.addEventListener('push', function (e) {
    var options = {
        body: 'push!!',
        icon: 'images/ArrowLeft.png',
        vibrate: [1000, 500, 1000],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: '2'
        },
        actions: [
            {
                action: 'explore', title: 'Explore this new world',
                icon: 'images/ArrowLeft.png'
            },
            {
                action: 'close', title: 'Close',
                icon: 'images/ArrowLeft.png'
            },
        ]
    };

    e.waitUntil(
        self.registration.showNotification('Hello world!', options)
    );
});

self.addEventListener('install', e => {
    console.log('install');
    e.waitUntil(
        caches.open("static").then(cache => {
            console.log('cache');
            return cache.addAll([
                './',
                '/images/ArrowLeft.png']);
        })
    )
});

self.addEventListener('fetch', e => {
    console.log(`intercepting ${e.request.url}`);
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    )
})

self.addEventListener('notificationclick', event => {
    const notification = event.notification;
    const action = event.action;
    const primaryKey = notification.data.primaryKey;
    console.log('Notification: ', primaryKey);
    if (action === 'close') {
        console.log('Close notification');
        notification.close();
    } else if (action === 'Somthingelse') {
        console.log('Go notification');
        clients.openWindow('https://www.sdinternational.nl/');
    } else if (action === 'go') {
        console.log('Go notification');
        clients.openWindow('http://imbuildings.com');
    } else {
        console.log('Go notification');
        clients.openWindow('http://google.com');
    }
})
