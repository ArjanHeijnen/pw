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


