import express from "express"
const app = express();
import authRoutes from "./routes/auth.js"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from 'dotenv';

dotenv.config();
app.use(cors());

// Middleware
app.use(express.json());

// MongoDB connection
mongoose
    .connect('mongodb+srv://yolo:SXo7xY4Yb2oyxcrp@cluster0.n4rrafs.mongodb.net/?retryWrites=true&w=majority&appName=cluster0', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err));

// Routes
app.use('/api/auth', authRoutes);

// Protected route example
// const auth = require('./auth/middleware/auth');
import auth from "./middleware/auth.js"

app.get('/api/protected', auth, (req, res) => {
    res.json({ message: 'You are authorized to access this route' });
});

const PORT = process.env.PORT || 5005;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));