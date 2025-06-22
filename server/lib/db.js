import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        mongoose.connection.on('connected', () => console.log('✅ Database Connected'));
        mongoose.connection.on('error', (err) => console.error('❌ MongoDB Error:', err));

        await mongoose.connect(process.env.MONGODB_URI); // ✅ No need to add /chat-app
    } catch (error) {
        console.error('❌ Connection Failed:', error);
    }
};