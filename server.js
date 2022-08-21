const express = require('express');
const app = express()

app.use(express.static('dist'))

app.get('/', (req, res) => {
    res.send('首页')
})

app.listen(3000, (err) => {
    if (err) {
        return console.log(err)
    }
    console.log('服务器正在运行。。。。')
})