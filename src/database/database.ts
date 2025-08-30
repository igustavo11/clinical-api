import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_URI || "mongodb://admin:admin123@localhost:27018/meubanco?authSource=admin")

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error: '));

db.once(
    'open',
    () => {
        console.log('conected mongodbbb');
    }
)

export default db;