const express = require('express')
const app = express()
const port = 3000

app.get('/trang', (req, res) => {
    var a = 1;
    var b = 2;
    var c = a + b;
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})

// khởi chạy bằng lệnh node index.js
// sau khi cài nodemon và cho start vào file package.json chạy bằng lệnh npm start
// ctrl C để thoát terminal