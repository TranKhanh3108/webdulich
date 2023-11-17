import mongoose from 'mongoose';
import colors from 'colors';
const connectDB = async()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log('Kết nối đến MONGODB'.bgYellow.white,conn.connection.host)
    }catch(error) {
        console.log('Lỗi đến MongoDB'.bgRed.white,error)
    }
};

export default connectDB;