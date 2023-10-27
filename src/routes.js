import { app } from './expressConfig';
import { firebaseAdmin } from './firebaseAdminConfig';

app.get('/', (req, res) => {
  res.send('Hello world node.js es6 app.');
});

app.post('/signup', async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  try {
    await firebaseAdmin.auth().createUser({ email, password });
  } catch (error) {
    if (
      error.code === 'auth/email-already-exists' ||
      error.code === 'auth/invalid-password'
    ) {
      res.status(500).send(error.message);
    } else {
      res.status(500).send('Something went wrong creating the user');
    }
    return;
  }

  const user = await firebaseAdmin.auth().getUserByEmail('gigi@example.com');
  res.send(JSON.stringify(user));
});
