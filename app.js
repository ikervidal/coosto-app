import express from "express";

const PORT = process.env.PORT || 5005;
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    console.log(req.headers);
    res.send("This is a fake Coosto App");
})

app.listen(PORT, () => console.log(`Server is runing at port: ${PORT} 🚀`));