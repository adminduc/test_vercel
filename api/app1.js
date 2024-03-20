import express from "express";
import dotenv from "dotenv";
// Khởi tạo ứng dụng Express
dotenv.config();
const app = express();
const port = 3000; // Cổng server

// Định tuyến cho route "/"
app.get("/", (req, res) => {
  res.send(`Hello, World! ${process.env.PORT}`); // Gửi "Hello, World!" về cho client
});

// Lắng nghe các kết nối đến cổng đã chỉ định
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
