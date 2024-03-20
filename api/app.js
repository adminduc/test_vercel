import express from "express";
// import dotenv from "dotenv";
// dotenv.config();
// Khởi tạo ứng dụng Express
const app = express();

app.get("/", (req, res) => {
  res.send(`Hello, World! 3000`); // Gửi "Hello, World!" về cho client
});

// Lắng nghe các kết nối đến cổng đã chỉ định
app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
