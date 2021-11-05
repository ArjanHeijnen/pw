var push = require('web-push');

let vapidkeyes = //push.generateVAPIDKeys();
//console.log(vapidkeyes);
{
    publicKey: 'BNRro0yvR4UoTCvjZr9njT28AMyfUvSuPtCF_cLlN-wm5KT7GfCEPjdOdcKc9-wYUhJkeSIVFryPb34Ts8D2R-0',
    privateKey: 'T7kzJ_C7xCnpy63_N8KsxhDBWuSU1xVkDIL9JCiZWOU'
};

push.setVapidDetails('mailto:arjan.heijnen@student.nhlstenden.com', vapidkeyes.publicKey, vapidkeyes.privateKey);

let sub = {}
push.sendNotification(sub, 'test message');