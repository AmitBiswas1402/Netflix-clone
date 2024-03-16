import mongoose from 'mongoose'

const connectToDB = async () => {
    try {

        await mongoose.connect('mongodb+srv://amit:netflix@netflix.p3ryqa2.mongodb.net/')

        console.log('mongodb is connected');
    } catch (e) {
        console.log(e);
    }
}

export default connectToDB