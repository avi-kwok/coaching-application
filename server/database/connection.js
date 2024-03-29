

import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const con = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });

        console.log(`MongoDB connected: ${con.connection.host}`);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

export default connectDB;
