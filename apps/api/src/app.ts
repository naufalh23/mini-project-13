import express, { json, Express, Request, Response } from 'express';
import cors from 'cors';
import { EventRouter } from './routers/event.router';
import path from 'path';
import { UserRouter } from './routers/auth.router';

const PORT: number = 8000

export default class App {
  private app: Express;

  constructor() {
    this.app = express();
    this.configure();
    this.routes();
  }

  private configure(): void {
    this.app.use(cors());
    this.app.use(json());
    this.app.use(
      '/api/public',
      express.static(path.join(__dirname, '../public')),
    );
  }

  private routes(): void {
    const userRouter = new UserRouter();
    const eventRouter = new EventRouter();

    this.app.get('/api', (req: Request, res: Response) => {
      res.send(`Hello, This is Event Management API!`);
    });

    this.app.use('/api/user', userRouter.getRouter());
    this.app.use('/api/events', eventRouter.getRouter());
  }

  public start(): void {
    this.app.listen(PORT, () => {
      console.log(`  ➜  [API] Local:   http://localhost:${PORT}/api`);
    });
  }
}
