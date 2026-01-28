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

    // DB connection
    await connectDB();

    // ✅ 1. HANDLE PREFLIGHT FIRST (CRITICAL)
    app.options("*", (req, res) => {
    res.header("Access-Control-Allow-Origin", "https://resume-building-platform-lao6.vercel.app");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.sendStatus(204);
    });

    // ✅ 2. CORS MIDDLEWARE
    app.use(cors({
    origin: "https://resume-building-platform-lao6.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    }));

    // ✅ 3. BODY PARSER
    app.use(express.json());

    app.get("/", (req, res) => res.send("Server is live"));

    // ✅ ROUTES
    app.use("/api/users", userRouter);
    app.use("/api/resumes", resumeRouter);
    app.use("/api/ai", aiRouter);

    app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
    });
