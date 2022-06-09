let errorClassArray = document.querySelectorAll('.password');

function checkPasswords(errorClassArray) { //checks if the passwords match
    return(errorClassArray[0].value === errorClassArray[1].value ? true : false);
};

function errorBox() { //changes the input box between error and not
    
}


console.log(checkPasswords(errorClassArray))