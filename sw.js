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