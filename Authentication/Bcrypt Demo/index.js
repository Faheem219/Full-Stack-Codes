const bcrypt = require('bcrypt');

// To create a salt and hash a password:
const hashPassword = async (pw) =>{
    const salt = await bcrypt.genSalt(12); // 12 is rec., time to hash increases exponentially
    const hash = await bcrypt.hash(pw, salt);
    console.log(salt);
    console.log(hash);
}

// To do both at once
const hashPassword2 = async (pw) =>{
    const hash = await bcrypt.hash(pw, 12);
    console.log(hash);
}

// Verifyin the login info with stored hash in database
const login = async (pw, hashedPw) => {
    const result = await bcrypt.compare(pw, hashedPw);
    if(result){
        console.log('Logged in successfully');
    }else{
        console.log('Incorrect');
    }
}

//hashPassword('monkey');
//hashPassword2('monkey');
login('monkey','$2b$12$wIW2fVDuG0Sbajqeec25gOllhyGN6FUGx8oU9VCfKDRMLEIVe0FXK');