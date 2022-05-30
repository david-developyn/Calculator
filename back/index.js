const express = require("express");
const app = express();

app.use((request, response, next) => {
	response.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
	response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.use(express.json());

app.post("/add", (request, response) => {
	response.end((request.body.number_1 + request.body.number_2).toString());
});

app.post("/sum", (request, response) => {
	response.end((request.body.number_1 - request.body.number_2).toString());
});

app.post("/multiply", (request, response) => {
	response.end((request.body.number_1 * request.body.number_2).toString());
});

app.post("/divide", (request, response) => {
	response.end((request.body.number_1 / request.body.number_2).toString());
});

app.listen(3000);