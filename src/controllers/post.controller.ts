import * as express from 'express';
import Post from '../interfaces/post.interface';

class PostController {
    public path = '/posts';
    public router = express.Router();

    private posts: Post[] = [
        {
            author: 'Marcine',
            content: 'Dolor sit amet',
            title: 'Lorem Ipsum',
            connStr: process.env.AZURE_COSMOS_CONNECTIONSTRING || 'NA'
        }
    ];

    constructor() {
        this.intializeRoutes();
    }

    public intializeRoutes() {
        this.router.get(this.path, this.getAllPosts);
        this.router.post(this.path, this.createAPost);
    }

    getAllPosts = (request: express.Request, response: express.Response) => {
        response.send(this.posts);
    }

    createAPost = (request: express.Request, response: express.Response) => {
        const post: Post = request.body;
        this.posts.push(post);
        response.send(post);
    }
}

export default PostController;