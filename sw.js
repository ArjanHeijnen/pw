

self.addEventListener('push', function (e) {
    console.log("e.type");
    const config = require('./config.json');
    console.log(config.Body);
    let randomText = "text" + Math.random();
    var options = {
        body: randomText,
        icon: 'images/ArrowLeft.png',
        vibrate: [1000, 500, 1000],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: '2'
        },
        actions: [
            {
                action: 'explore', title: 'Explore',
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
