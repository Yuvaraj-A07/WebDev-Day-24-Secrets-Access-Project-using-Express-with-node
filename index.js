//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from 'express';
import bodyParser from 'body-parser';
import {dirname} from 'path';
import {fileURLToPath} from 'url';

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
const port = 3000;
const password = "ILoveProgramming";
var userPassword = "";

app.use(bodyParser.urlencoded({extended: true}));

function checkPasssword(req, res, next){
    userPassword = req.body.password;
    next();
}
app.use(checkPasssword);

app.post('/check', (req, res) => {
    if (userPassword === password){
        res.sendFile(__dirname + "/public/secret.html");
    }
    else{
        res.sendFile(__dirname + "/public/index.html");
    }

});

app.get("/", (req, res) =>{
    res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, (req, res) => {
    console.log(`App is running on the port ${port}`);
});