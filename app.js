const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.resolve(__dirname, './public');

app.use(express.static(publicPath));

app.listen(3000, () => {
    console.log("Server corriendo en el puerto 3000");
});