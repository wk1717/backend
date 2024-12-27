const express = require('express')
const app = express()
const port = 3000

var cors = require('cors')
app.use(cors())

app.get('/', function (req, res) {
    res.send('Hello World')
})
app.get('/sound/:name', function (req, res) {
    // const p = req.params;
    // console.log(p);
    const{name} = req.params
    console.log(name)

    if (name == "dog"){
        res.json({'sound':'멍멍'})
    }
    else if (name == "cat"){
        res.json({'sound':'야옹'})
    }
    else{
        res.json({'sound':'꿀꿀'})
    }
    // const q = req.query;
    // console.log(q);

})

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})