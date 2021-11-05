var push = require('web-push');

let vapidkeyes = //push.generateVAPIDKeys();
//console.log(vapidkeyes);
{
    publicKey: 'BNRro0yvR4UoTCvjZr9njT28AMyfUvSuPtCF_cLlN-wm5KT7GfCEPjdOdcKc9-wYUhJkeSIVFryPb34Ts8D2R-0',// used on index.html
    privateKey: 'T7kzJ_C7xCnpy63_N8KsxhDBWuSU1xVkDIL9JCiZWOU'// should be hidden
};

push.setVapidDetails('mailto:arjan.heijnen@student.nhlstenden.com', vapidkeyes.publicKey, vapidkeyes.privateKey);//idk why using my own email, in example a fake email is used

//get sub data from database or something
let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/cR29n8_e_ds:APA91bHo2bisoJkdkmbrEIRrS-nC7F2K8AsBPBGSxfZXtQtU9M9TZ3vQ8itjbY4eAMisF--_dDrtM5E5BaiqHRVvATBWXfHYae1B1oyXqvT_RUxiX-a0M5E-f_3NJOFswmTrrkJge3gP","expirationTime":null,"keys":{"p256dh":"BMATtNS8kS6UxJ7IC2lWoOAGlArj81B3lEv-163hPgeLRlvirwDB0IXGlPXuqApqEivjLW2itOF6wBpZoxwsV2w","auth":"_6qjEr2buFnw3zLzfEl9Qg"}}
push.sendNotification(sub, 'test message');