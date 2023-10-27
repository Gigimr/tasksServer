var admin = require('firebase-admin');

var serviceAccount = require('../config/firebaseServiceAccount.json');

export const firebaseAdmin = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
