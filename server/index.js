import express from "express"
const app = express();

const PORT = 8000

app.get("/", (req, res) => {
    res.send("Hello World from Server")
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})