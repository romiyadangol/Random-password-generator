const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;

app.use(express.json());
app.use(cors());

app.post('/generate-password', (req,res) => {
    const payload = req.body;
    const {length, isNumber, isUppercase, isLowercase, isSpecialChar} = payload;

    const number = '0123456789';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const specialCharacter = '!@#$%^&*()_+';

    let characters ='';
    if (isNumber) {
        characters += number;
    }
    if (isUppercase) {
        characters += uppercase;
    }
    if (isLowercase) {
        characters += lowercase;
    }
    if (isSpecialChar) {
        characters += specialCharacter;
    }
    

    let password = '';
    for(let i=0;i<length;i++){
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    res.json({password});

})
app.listen(port,()=> console.log('Server is running on port '+port));