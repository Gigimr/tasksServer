import { app } from './expressConfig';
import './routes';

app.listen(3000, () => {
  console.log('ES6 application listening on port 3000!');
});
