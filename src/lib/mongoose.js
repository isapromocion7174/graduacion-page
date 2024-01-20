
import { connect } from "mongoose";
export const MONGO_URI = import.meta.env.MONGO_URI

export const connectDB = async () => {
    try {
        const conn = await connect(MONGO_URI);
        return conn
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};
