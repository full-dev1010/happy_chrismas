import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import routes from "./routes";
import responseEnhancer from "express-response-formatter";

let app = new express();

app.use(cors());

const PORT = 3200;

mongoose.Promise = global.Promise;

const options = { useNewUrlParser: true };

//change connection string
mongoose.connect("mongodb://127.0.0.1:27017/rapteiDB", options,
    function(error) {
        if (error) { console.log(error); }
    });

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(responseEnhancer());

app.use("/api/v1", routes);

app.get("/", (request, response) =>
    response.send(`Server is running on port ${PORT}`)
);

app.listen(process.env.PORT || PORT, () =>
    console.log(`Server is running on http://localhost:${PORT}`)
);


module.exports = app;