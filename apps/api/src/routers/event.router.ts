import { Router } from 'express';
import { EventController } from '../controllers/event.controller';
import { uploader } from '../middlewares/uploader';
import { checkEO, verifyToken } from '../middlewares/token';

export class EventRouter {
  private router: Router;
  private eventController: EventController;

  constructor() {
    this.eventController = new EventController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.post(
      '/',
      uploader('event-', '/event').single('image'),
      verifyToken,
      this.eventController.createEvent,
    );
    this.router.patch(
      '/update/:id',
      uploader('event-', '/event').single('image'),
      verifyToken,
      checkEO,
      this.eventController.updateEvent,
    );
    this.router.get('/', this.eventController.getEvents);
    this.router.get(
      '/creator/events',
      verifyToken,
      checkEO,
      this.eventController.getEventsByCreator,
    );
    this.router.get('/:slug', this.eventController.getEventSlug);
  }

  getRouter(): Router {
    return this.router;
  }
}
