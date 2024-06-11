const express = require('express'); // Corrected require statement
const app = express();

app.use(express.json()); // Added parentheses after express.json

app.use('/', (req, res, next) => {
    console.log("Api is hitting");
    return res.status(200).json({ "msg": "Hello form shopping" }); 
});

app.listen(8003, () => {
    console.log('Shopping is listening to port 8003');
});