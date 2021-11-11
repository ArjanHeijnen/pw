var push = require('web-push');

let vapidkeyes = //push.generateVAPIDKeys();
//console.log(vapidkeyes);
{
    publicKey: 'BNRro0yvR4UoTCvjZr9njT28AMyfUvSuPtCF_cLlN-wm5KT7GfCEPjdOdcKc9-wYUhJkeSIVFryPb34Ts8D2R-0',// used on index.html
    privateKey: 'T7kzJ_C7xCnpy63_N8KsxhDBWuSU1xVkDIL9JCiZWOU'// should be hidden
};

push.setVapidDetails('mailto:arjan.heijnen@student.nhlstenden.com', vapidkeyes.publicKey, vapidkeyes.privateKey);//idk why using my own email, in example a fake email is used

//get sub data from database or something
let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/d57nW9Xm-5k:APA91bEAhYYZRMsTC_C7t0F429o3lbQQ5YnPjUu3kRTGK4rmvt7R81q4kwPbIv6Hb12vLEHFbeLVWLdAwA3ue7a6QaRKTBQWvEWVXEmDse64pV7mO2-MCwALTjrNJxXaCQJVvmXAqr9d","expirationTime":null,"keys":{"p256dh":"BJ81zUYG4MXzMbaWrCm7tHg0MHuec6ZO8uAeUoDNFe5FzHfidBh2mlgzxDZrV_Z1Bse5Nc0V_PM8A1LeRauJmtE","auth":"-X7_3Nf4QkJH5poXaPOYWg"}}




push.sendNotification(sub, 'test message');