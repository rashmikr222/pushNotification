const webpush = require('web-push');

// const vapidKeys = webpush.generateVAPIDKeys();
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
    endpoint:"https://fcm.googleapis.com/fcm/send/dPC7MifpgMw:APA91bEolbnc9PNdYk3MN7G_FAN5hdPoZJsUBUQlosInWfGiYNN2K36s_fUoZ89LJN8eoka34bkc_DI-6-tlb0-oIcMdZm2K5LYMjG2pOqbCuQNhoF5gvzelyi90sAitvCobDpYz7yqF",
    expirationTime:null,
    keys:{p256dh:"BFazx6PLy7Siw7lsoEu7Lsd2pUY6VLjaFi6XHnD7UruhFV46Mp3D949qwuHCpl_23NywcrvhzpdwULB3FKlOoEo",
    auth:"C2FAm5DSO7y-VjKDcgb_ew"}
  };

  webpush.sendNotification(sub, 'Your Push Payload Text');