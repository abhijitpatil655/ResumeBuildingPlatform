// import express from "express";
// import cors from "cors";
// import "dotenv/config";
// import connectDB from "./configs/db.js";
// import userRouter from "./routes/userRouts.js";
// import resumeRouter from "./routes/resumeRoutes.js";
// import aiRouter from "./routes/aiRoutes.js";

// const app = express();
// const PORT = process.env.PORT || 3000;

// //database connection
// await connectDB()

// app.use(express.json());
// app.use(cors());

// app.get('/',(req,res)=>res.send("Server is live"));
// app.use('/api/users',userRouter);
// app.use('/api/resumes',resumeRouter);
// app.use('/api/ai',aiRouter)

// app.listen(PORT,()=>{
//     console.log(`server is running on port ${PORT}`);
// });


import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./configs/db.js";
import userRouter from "./routes/userRouts.js";
import resumeRouter from "./routes/resumeRoutes.js";
import aiRouter from "./routes/aiRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

// database connection
await connectDB();

// ✅ CORS FIX (VERY IMPORTANT)
app.use(cors({
    origin: "https://resume-building-platform-lao6.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
}));

// ✅ handle preflight requests
app.options("*", cors());

app.use(express.json());

app.get("/", (req, res) => res.send("Server is live"));

app.use("/api/users", userRouter);
app.use("/api/resumes", resumeRouter);
app.use("/api/ai", aiRouter);

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});
