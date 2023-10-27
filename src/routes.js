import { app } from './expressConfig';
import { firebaseAdmin } from './firebaseAdminConfig';

app.get('/', (req, res) => {
  res.send('Hello world node.js es6 app.');
});
