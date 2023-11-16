import dotenv from 'dotenv';
import App from './app';
import PostController from './controllers/post.controller';

dotenv.config();

// const app: Express = express();
const port = Number(process.env.PORT);

const app = new App(
    [
        new PostController()
    ],
    port,
);

app.listen();