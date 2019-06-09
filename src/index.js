const express = require('express');


const app = express();
const port = 3000;

app.listen(port, () => console.log(`API is up and running on port ${port}`));
