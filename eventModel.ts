import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  date: {
    type: Date,
    required: true,
    validate: {
      validator: (value: Date) => value > new Date(),
      message: 'Date must be in the future.'
    }
  }
}, { timestamps: true });

export const Event = mongoose.model('Event', eventSchema);
