import dotenv from 'dotenv';
import App from './app';
import PostController from './controllers/post.controller';
import DistrictController from './controllers/district.controller';
import { districtService } from './services/district.service';

dotenv.config();

// const app: Express = express();
const port = Number(process.env.PORT);

const app = new App(
    [
        new PostController(),
        new DistrictController(districtService, 7464646)
    ],
    port,
);

app.listen();