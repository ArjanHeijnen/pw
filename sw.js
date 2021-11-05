self.addEventListener('push', function (e) {
    var options = {
        body: 'This notification was generated from a push!',
        icon: 'images/ArrowLeft.png',
        vibrate: [1000, 500, 1000],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: '2'
        },
        actions: [
            {
                action: 'explore', title: 'Explore this new world',
                icon: 'images/checkmark.png'
            },
            {
                action: 'close', title: 'Close',
                icon: 'images/xmark.png'
            },
        ]
    };

    e.waitUntil(
        self.registration.showNotification('Hello world!', options)
    );
});