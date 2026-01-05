const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello Teacher! This is project of MSSV: 23127423');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
