const push = require('web-push');

// const vapidKeys = push.generateVAPIDKeys();
// console.log("keys -",vapidKeys);
const vapidKeys = {
    publicKey: 'BN5_gMwOfJTL8B4LmPTUlYAs7gCwJPkgN6748y1GPOpzF1pPpHePdBmyhgKTFCPugxWHkeJwwQ1kpFz8CHyACmg',
privateKey: 'WIfH1J7J4WlPiXW95VS_a-pI00YXEsQvfAJaIjYeFQQ'
}

webpush.setVapidDetails(
    'mailto:rashmi.kr@dollarbirdinc.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey
  );

  const sub = {
    endpoint: '.....',
    keys: {
      auth: '.....',
      p256dh: '.....'
    }
  };

  webpush.sendNotification(sub, 'Your Push Payload Text');