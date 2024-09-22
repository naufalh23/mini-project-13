import { Request, Response } from 'express';
import prisma from '../prisma';
import { Prisma } from '@prisma/client';
import { EventType } from '@prisma/client';

export class EventController {
  async createEvent(req: Request, res: Response) {
    try {
      if (!req.file) throw 'no file uploaded';
      const link = `http://localhost:8000/api/public/event/${req?.file?.filename}`;

      const {
        title,
        content,
        slug,
        eventtype,
        price,
        discount,
        capacity,
        location,
        date,
      } = req.body;

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

  async updateEvent(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const {
        title,
        content,
        slug,
        eventtype,
        price,
        discount,
        capacity,
        location,
        date,
      } = req.body;

      // Retrieve the event from the database
      const event = await prisma.event.findFirst({
        where: { id: Number(id) },
      });

      // Check if the event exists
      if (!event) {
        return res.status(404).send({
          status: 'error',
          msg: 'Event not found',
        });
      }

      // Check if the user is the creator of the event
      if (event.userId !== req.user?.id) {
        return res.status(403).send({
          status: 'error',
          msg: 'You are not authorized to update this event',
        });
      }

      // Create an object with the fields to update
      let updateData: Prisma.EventUpdateInput = {
        title,
        content,
        slug,
        eventtype,
        price,
        discount,
        capacity,
        location,
        date,
      };

      // Update the image if a new file is uploaded
      if (req.file) {
        const link = `http://localhost:8000/api/public/event/${req?.file?.filename}`;
        updateData.image = link;
      }

      // Update the event in the database
      const updatedEvent = await prisma.event.update({
        where: { id: Number(id) },
        data: updateData,
      });

      res.status(200).send({
        status: 'ok',
        msg: 'Event updated successfully',
        event: updatedEvent,
      });
    } catch (err) {
      res.status(400).send({
        status: 'error',
        msg: err || 'An error occurred while updating the event',
      });
    }
  }

  async getEvents(req: Request, res: Response) {
    try {
      const { search, eventtype } = req.query;
      let filter: Prisma.EventWhereInput = {};

      if (search) {
        filter.title = { contains: search as string };
      }

      if (eventtype) {
        filter.eventtype = {
          in: eventtype === 'paid' ? [EventType.Paid] : [EventType.Free],
        };
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

  async getEventsByCreator(req: Request, res: Response) {
    try {
      const userId = req.user?.id;
      if (!userId) {
        return res.status(401).send({
          status: 'error',
          msg: 'Unauthorized',
        });
      }

      const events = await prisma.event.findMany({
        where: {
          userId,
        },
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
