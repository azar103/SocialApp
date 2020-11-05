const express = require("express");
const connectDB = require("./config/connectDB");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
const postRouter = require("./routers/post");
const authRouter = require("./routers/auth");
const commentRouter = require("./routers/comment");
connectDB();

app.use("/api/posts", postRouter);
app.use("/api/auth", authRouter);
app.use("/api/comments", commentRouter);

const port = process.env.PORT || 5000;
app.listen(port, (err) => {
  if (err) {
    console.log("server is not runned");
  }
  console.log(`server is running on port ${port}... `);
});
