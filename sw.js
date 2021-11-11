self.addEventListener('push', function (e) {
    console.log("push initiated");
    let bodyText = getdata();
    var options = {
        body: bodyText,
        icon: 'images/ArrowLeft.png',
        vibrate: [1000, 500, 1000],
        image: 'https://www.imbuildings.com/wp-content/uploads/brizy/319/assets/images/iW=311&iH=73&oX=0&oY=0&cW=311&cH=73/logoheader.png',//600px by 400px
        data: {
            dateOfArrival: Date.now(),
            primaryKey: '2'
        },
        actions: [
            {
                action: 'explore', title: 'Explore',
                icon: 'https://www.imbuildings.com/wp-content/uploads/brizy/319/assets/images/iW=404&iH=441&oX=0&oY=0&cW=404&cH=441/solution.png'
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

self.addEventListener('notificationclick', event => {
    const notification = event.notification;
    const action = event.action;
    const primaryKey = notification.data.primaryKey;
    console.log('Notification: ', primaryKey);
    if (action === 'close') {
        console.log('Close notification');
        notification.close();
    } else if (action === 'explore') {
        console.log('explore');
        clients.openWindow('https://www.sdinternational.nl/');
    } else {
        console.log('Go notification');
        clients.openWindow('http://imbuildings.com');
    }
})

function getdata() {
    let data = "oke2";

    return data;
}
self.addEventListener('install', e => {
    console.log('install');
    e.waitUntil(
        caches.open("static").then(cache => {
            console.log('cache');
            return cache.addAll([
                './',
                'index.js',
                'ArrowRight.png',
                '/icons/manifest-icon-192.maskable.png',
                '/icons/manifest-icon-512.maskable.png',
                '/images/ArrowLeft.png',
                'manifest.json',
                'favicon.ico',
                'index.html',
                'logoheader.png',
                'second.html',
                'sw.js',
                'Uitzicht.jpg']);
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