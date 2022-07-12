import mongoose from 'mongoose';

const { CLUSTER_NAME, PASSWORD, USER } = process.env;

const ATLAS = `mongodb+srv://${USER}:${PASSWORD}@${CLUSTER_NAME}.uyoyee0.mongodb.net/?retryWrites=true&w=majority`;

async function dbConnect() {
    try {
        const db = await mongoose.connect(ATLAS)
        console.log("connected to", db.connection.host)

    } catch (error) {
        process.exit(1)
    }
};
dbConnect();

export default dbConnect;