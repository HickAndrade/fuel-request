import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
//import { v1Router } from './api/v1';
//import { isProduction } from ../../../config;

const origin = {
  //origin: isProduction ? 'https://mywebsite.com': '*',
    origin: "*"
}
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(cors(origin));
app.use(helmet());
app.use(morgan('combined'));

//app.use('/api/v1', v1Router);

const port = process.env.PORT && 3456;

app.listen(port, () => {
    console.log(`[App]: Listening on port ${port}.`)
})