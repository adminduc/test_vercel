import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.get("/", (req, res) => res.send(`Express on Vercel ${process.env.PORT}`));

app.listen(process.env.PORT, () =>
  console.log(`Server ready on port ${process.env.PORT}`)
);

export default app;
