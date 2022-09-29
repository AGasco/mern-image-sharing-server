import express from 'express';
import bodyParser from 'body-parser';
import { initializeApp, cert } from 'firebase-admin/app';
import fileUpload from 'express-fileupload';
import { db } from './db';
import { routes, protectRouteMiddleware } from './routes';
import credentials from './credentials.json';

initializeApp({
  credential: cert(credentials),
  databaseURL: 'https://mern-photo-sharing.firebaseio.com'
});

const app = express();

app.use(express.static(__dirname + '/uploads/'));
app.use(fileUpload());
app.use(bodyParser.json());

routes.forEach((route) => {
  app[route.method](route.path, protectRouteMiddleware, route.handler);
});

const start = async () => {
  await db.connect(
    'mongodb+srv://GascoA:abc1234@cluster0.cseviwm.mongodb.net/?retryWrites=true&w=majority'
  );
  app.listen(8080, () => {
    console.log('Server is listening on port 8080');
  });
};

start();
