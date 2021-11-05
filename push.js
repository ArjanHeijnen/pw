var push = require('web-push');

let vapidkeyes = //push.generateVAPIDKeys();
//console.log(vapidkeyes);
{
    publicKey: 'BNRro0yvR4UoTCvjZr9njT28AMyfUvSuPtCF_cLlN-wm5KT7GfCEPjdOdcKc9-wYUhJkeSIVFryPb34Ts8D2R-0',// used on index.html
    privateKey: 'T7kzJ_C7xCnpy63_N8KsxhDBWuSU1xVkDIL9JCiZWOU'// should be hidden
};

push.setVapidDetails('mailto:arjan.heijnen@student.nhlstenden.com', vapidkeyes.publicKey, vapidkeyes.privateKey);//idk why using my own email, in example a fake email is used

//get sub data from database or something
let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/esFxAY7optk:APA91bFH7qgtygJUrFvFeh9ZV_d1R4HOELJ9vbsWiDD_eXZgYotiKF_bb6BrE_t7mbJ0avUoULNt5QVjmb85fEB4PaKZPuFWSPHVOZx7zsSgvqSoCmF5y3i2_UkET1u7Y1yS7ELdVOk8","expirationTime":null,"keys":{"p256dh":"BKdoo7ewmQksrle6lLZGtw23_c8UZOHcrie7EUVxaQNRDn4fyp0Bi7gROxidvFlPOHuHfzXZZ3dRfXo6iClZ5yg","auth":"ChfUDUjoLAK0f_-UNgYNHA"}}





push.sendNotification(sub, 'test message');