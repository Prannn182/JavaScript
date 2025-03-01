//The Password Validator: You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.
let pass="Pranali@123"
let pass1="pranali@123"
let hasuppercase=false;
let haslowercase=false;
let hasdigit=false;
for (const char of pass1) {
    if(char>="A"&& char<="Z"){
        hasuppercase=true;
    }
    if(char>="a"&& char<="z"){
        haslowercase=true;
    }
    if(char>="0"&& char<=9){
        hasdigit=true;
    }
    
}

    if(pass1.length>=8){
        if(hasuppercase&&haslowercase&&hasdigit){
        console.log('Password is valid');
        
    }else {
        console.log('password must be atleast 8 characters long & contains both uppercase and lowercase letters, and includes at least one digit');
        
    }
}