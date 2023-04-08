import mongoose from 'mongoose';
const schema = mongoose.Schema({
    tuit: String,
    likes: Number,
    liked: Boolean,
    image: String,
    handle: String,
    userName: String,
    time: String
}, {collection: 'tuits'});
export default schema;