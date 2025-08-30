import express from 'express';
import bodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express';
import  router  from './routes/route';
import db from './database/database';
import { specs } from './swagger';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.use("/api", router);

db.once('open', () => {
    app.listen(3000, () => {
        console.log("Server running on port 3000");
        console.log("MongoDB connection successful!");
        console.log("Swagger documentation available at: http://localhost:3000/api-docs");
    });
});

db.on('error', (error) => {
    console.error("MongoDB connection error:", error);
    process.exit(1);
});