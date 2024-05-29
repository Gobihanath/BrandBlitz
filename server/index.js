const express = require('express');
const app = express();
const appConfig = require('./app-configs');

const authRouter = require('./routes/auth-router');
const connectMongo = require('./db-connect');
const bodyParser =  require('body-parser');


app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(bodyParser.json());

app.use('/', (req,res, next) => {
    res.setHeader('Access-control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Headers' , 'Authorization, Content-Type');
    next();
});

app.use('/auth', authRouter);

// app.use('/', (req, res, next) => {
//     const token = req.header('Authorization');

//     if(!token){
//         res.status(401).json({error: 'Token is required, access denied'})
//     }else {
//         const decodedToken = jwt.verify(token, appConfig.jwt)
//     }
// })

connectMongo().then(() => {
    console.log('Database Connected');
    let port = appConfig.connectionPort || 3000
    app.listen(port, () => {
        console.log(`Server is listening in port ${port}`);
    }); 
}).catch((error) => {
    console.log('Database connection failed', error);
})
