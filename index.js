const express = require('express');

const app = express();

app.use('/', (req, res, nexxt)=>{
    console.log('invalid connection')
    nexxt()
})

app.use('/callback', (req, res, next)=>{
    const {method, ip, originalUrl, params} = req;
    console.log(JSON.stringify({
        method,
        ip,
        originalUrl
    }))
    console.log('end connection');
    res.status(200).send('test callback')
})

app.listen(process.env.PORT, ()=>{
    console.log('server running')
})
