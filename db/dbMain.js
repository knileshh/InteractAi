import mongoose from "mongoose"

async function connect(){
    await mongoose.connect('mongodb+srv://yolo:SXo7xY4Yb2oyxcrp@cluster0.n4rrafs.mongodb.net/interactAi?retryWrites=true&w=majority&appName=cluster0')
}

await connect()

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
})

const User = mongoose.model('User', UserSchema);

const silence = new User(
    { username: "rames34343h",
    password: "ramesh12334344"},
    )


console.log(silence)

await silence.save()