import express from 'express';
import bodyParser from 'body-parser';
import  router  from './routes/route.ts';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", router);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});