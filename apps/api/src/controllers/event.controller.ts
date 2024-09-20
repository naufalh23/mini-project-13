import { Request, Response } from 'express';
import prisma from '../prisma';
import { Prisma } from '@prisma/client';



export class EventController {
  async createEvent(req: Request, res: Response) {
    try {
      if (!req.file) throw 'no file uploaded';
      const link = `http://localhost:8000/api/public/event/${req?.file?.filename}`;

      const { title, content, slug, eventtype, price, discount, capacity, location, date } = req.body;

      const event = await prisma.event.create({
        data: {
          title,
          content,
          slug,
          eventtype,
          price, 
          discount,
          capacity,
          location,
          date,
          image: link,
          userId: req.user?.id!,
        },
      });
      res.status(201).send({
        status: 'ok',
        msg: 'event created !',
        event,
      });
    } catch (err) {
      res.status(400).send({
        status: 'error',
        msg: err,
      });
    }
  }

  async getEvents(req: Request, res: Response) {
    try {
      const { search } = req.query;
      let filter: Prisma.EventWhereInput = {};

      if (search) {
        filter.title = { contains: search as string };
      }

      const events = await prisma.event.findMany({
        where: filter,
        include: { user: true },
        orderBy: { createdAt: 'desc' },
      });
      res.status(200).send({
        status: 'ok',
        events,
      });
    } catch (err) {
      res.status(400).send({
        status: 'error',
        msg: err,
      });
    }
  }

  async getEventSlug(req: Request, res: Response) {
    try {
      const events = await prisma.event.findFirst({
        where: { slug: req.params.slug },
        include: { user: true },
        orderBy: { createdAt: 'desc' },
      });
      res.status(200).send({
        status: 'ok',
        events,
      });
    } catch (err) {
      res.status(400).send({
        status: 'error',
        msg: err,
      });
    }
  }
}
