import express,{ json } from 'express';
import { rootRoute } from './Router/RootRoute.js';

const app = express();
app.listen(8080);
app.use(express.json());
app.use(express.static("."));


app.use('/api',rootRoute);
