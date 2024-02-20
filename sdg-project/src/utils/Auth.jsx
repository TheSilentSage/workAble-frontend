export function handleLogin(username,password){
    if(username === "admin" && password === "admin"){
        return true;
    }
    else{
        return false;
    }
}

export function handleRegister(username,password){

    if(username === "admin" && password === "admin"){
        return true;
    }
    else{
        return false;
    }

}