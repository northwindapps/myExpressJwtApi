const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
app.get('/api', (req,res) => {
    res.json({
        message:'Welcom to the API'
    });
});

app.post('/api/posts', (req,res)=>{
    res.json({
        messate:'Post created...'
    });
});


app.post('/api/login', (req,res) => {
    //Mock user
    const user = {
        id:1,
        username: 'yujin',
        email: 'northwindapps@gmail.com'
    }
    jwt.sign({user}, 'secretkey', (err, token) => {
        res.json({
            token
        });
    });
});


app.listen(5000, () => console.log('Server started on port 5000'));