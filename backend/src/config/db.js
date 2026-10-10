import mongoose from 'mongoose';

export const connectDB = async () => {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.warn('MONGODB_URI not set — skipping database connection');
    return;
  }
  await mongoose.connect(uri);
  console.log('MongoDB connected');
};
