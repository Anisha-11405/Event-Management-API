import { Request, Response } from 'express';
import { Event } from '../models/eventModel';

export const createEvent = async (req: Request, res: Response) => {
  try {
    const event = await Event.create(req.body);
    res.status(201).json(event);
  } catch (err) {
    res.status(400).json({ error: (err as Error).message });
  }
};

export const getAllEvents = async (_req: Request, res: Response) => {
  const events = await Event.find();
  res.json(events);
};

export const getEventById = async (req: Request, res: Response) => {
  const event = await Event.findById(req.params.id);
  if (!event) return res.status(404).json({ error: 'Event not found' });
  res.json(event);
};

export const updateEvent = async (req: Request, res: Response) => {
  try {
    const event = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!event) return res.status(404).json({ error: 'Event not found' });
    res.json(event);
  } catch (err) {
    res.status(400).json({ error: (err as Error).message });
  }
};

export const deleteEvent = async (req: Request, res: Response) => {
  const event = await Event.findByIdAndDelete(req.params.id);
  if (!event) return res.status(404).json({ error: 'Event not found' });
  res.json({ message: 'Event deleted' });
};
