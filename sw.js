self.addEventListener('push',(e)=>{
    var options = {
        body:'This notification was generated from a push',
        data : {
            dateOfArrivals : Date.now(),
        },
        actions:[
            {
                action:'explore',
                title:'explore this new world',
                icon: 'images/checkmark.png'
            },
            {
                action:'close',
                title:'close',
                icon: 'images/xmark.png'
            }
        ]
    };
    e.waitUntil(
        self.registration.sendNotification('test message',options)
    );
    
});