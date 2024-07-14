import mongoose from 'mongoose';
const { Schema, model } = mongoose;
const Userschema = new Schema({
    username: {type: String, required: true},
    email:{type:String, required:true},
    password:{type:String, required:true}
});
const User = mongoose.model('User', Userschema);
export default User;