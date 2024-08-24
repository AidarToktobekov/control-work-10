import express from "express";
import fileDb from "./fileDb";
import commentsRouter from "./routers/comments";
import newsRouter from "./routers/news";

const app = express();
const port = 8080;

app.use(express.json());
app.use(express.static('public'));
app.use('/', commentsRouter);
app.use('/', newsRouter);

const run = async()=>{
    await fileDb.init();

    app.listen(port, ()=>{
        console.log(`Server started on ${port}`);
    })
}
run().catch(console.error);