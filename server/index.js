const express = require('express');
const cors  = require('cors');


app = express();
app.use(cors());

app.use(express.json())

app.get('/', (req, res) => {
    res.send('server started')
})


app.post('/form', (req, res) => {

    console.log(res.data);

    console.log(req.data);

    res.send({ response : 'transmission ok' })
    
})


app.listen(3001, () => console.log('server started'))