// import express from "express";
// import morgan from "morgan";
// import cors from "cors";
// // import * as dotenv from "dotenv";
// import * as path from "path";
// // import { fileURLToPath } from "url";
// // import connectDB from "./configs/database.js";
// // import Router from "./routes/index.js";
// const app = express();
// // dotenv.config();

// // const { PORT, MONGO_URI } = process.env;
// // Khởi tạo kết nối với cơ sở dữ liệu
// // connectDB(MONGO_URI);

// app.use(express.json());
// // Bỏ block fetch api CORS
// app.use(cors());
// app.use(morgan("tiny"));

// // Theme home
// // const __filename = fileURLToPath(import.meta.url);
// // const __dirname = path.dirname(__filename);
// app.get("/", (req, res) => {
//   // docs https://flaviocopes.com/fix-dirname-not-defined-es-module-scope/
//   return res.status(200).json({
//     message: "Hi Server",
//   });
//   return res.sendFile(path.join(__dirname, "./public/index.html"));
// });
// // Navigate Router
// // app.use("/api", Router);

// // // Notfound api
// // app.use((req, res, next) => {
// //   //   const error = new Error("API not found");
// //   //   error.status = 404;
// //   //   next(error);
// //   return res.status(404).json({
// //     message: "API không tồn tại, bỏ cái thói rình mò API người khác đi",
// //   });
// // });

// // Required listening Express server
// app.listen(8000, (req, res) =>
//   console.log("Listen server running port " + 8000)
// );

// export const viteNodeApp = app;

import express from "express";
const app = express();

app.get("/", (req, res) => res.send("Express on Vercel"));

app.listen(3000, () => console.log("Server ready on port 3000."));

export const viteNodeApp = app;
