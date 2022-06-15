import express from "express";

const PORT = process.env.PORT || 5005;
const app = express();

app.use(express.json());

app.listen(PORT, () => console.log(`Server is runing at port: ${PORT} 🚀`));