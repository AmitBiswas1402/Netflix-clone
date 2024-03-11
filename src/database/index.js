import mongoose from 'mongoose'

const connectToDB = async () => {
    try {

        await mongoose.connect('mongodb+srv://amitbiswas:netflix@cluster0.qsyemkk.mongodb.net/')

        console.log('mongodb is connected');
    } catch (e) {
        console.log(e);
    }
}

export default connectToDB