const passwordContainer = document.querySelectorAll('.passwordContainer');
const passwordArray = document.querySelectorAll('.password');

function checkPasswords() { //checks if the passwords match
    if(passwordArray[0].value !== passwordArray[1].value){
        addError();
    } else {removeError();
    };
};

function addError() { //changes the input box between error and not
    if(!passwordContainer[0].classList.contains('error')){
        passwordContainer.forEach(element => {
            element.classList.add("error");

            });
    }
};

function removeError() {
    if(passwordContainer[0].classList.contains('error')){
        passwordContainer.forEach(element => {
            element.classList.remove("error");

            });
    }
};

passwordContainer[1].addEventListener('change',() => {
    passwordContainer.forEach(element => {
        element.addEventListener('change', checkPasswords)
    }
    )
    checkPasswords();    
}, {once : true});

/*passwordContainer.forEach(element => {
    element.addEventListener('change', checkPasswords);
});
*/