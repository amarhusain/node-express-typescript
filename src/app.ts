import express, { Express, Request, Response } from 'express';
import * as bodyParser from 'body-parser';
import mongoose from 'mongoose';

class App {
    public app: Express;
    public port: number;

    constructor(controllers: any, port: number) {
        this.app = express();
        this.port = port;

        this.initializeMiddlewares();
        this.initializeControllers(controllers);
    }

    private initializeMiddlewares() {
        this.app.use(bodyParser.json());
    }

    private initializeControllers(controllers: any) {
        controllers.forEach((controller: any) => {
            this.app.use('/api', controller.router);
        });
    }


    private connectToTheDatabase() {
        const {
            MONGO_USER,
            MONGO_PASSWORD,
            MONGO_PATH,
        } = process.env;
        // mongoose.connect(`mongodb://127.0.0.1:27017/shivamhomeo_db`);
        mongoose.connect("mongodb://" + process.env.COSMOSDB_USER + ":" + process.env.COSMOSDB_PASSWORD + "@" + process.env.COSMOSDB_HOST + ":" + process.env.COSMOSDB_PORT + "/" + process.env.COSMOSDB_DBNAME + "?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@shivamhtest-server@");
    }


    public listen() {
        this.app.listen(this.port, () => {
            console.log(`⚡️[server]: Server is running at http://localhost:${this.port}`);
        });
    }
}

export default App;