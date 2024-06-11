const express = require('express'); // Corrected require statement
const app = express();

app.use(express.json()); // Added parentheses after express.json

app.use('/', (req, res, next) => {
    console.log("Api is hitting");
    return res.status(200).json({ "msg": "Hello form product" }); 
});

app.listen(8002, () => {
    console.log('Product is listening to port 8002');
});