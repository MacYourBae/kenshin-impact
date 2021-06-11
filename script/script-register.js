const form = document.getElementById("registerForm");
form.addEventListener("submit", registerForm);

function registerForm(){
    const registerForm = document.forms.registerForm;
    const name = registerForm.username.value;
    const email = registerForm.email.value;
    const password = registerForm.password.value;
    const confirmPassword = registerForm.confirmPassword.value;

    if (name === ""){
        alert("Name must be filled out");
        return false;
    }

    if (email === ""){
        alert("Email must be filled out");
        return false;
    }
    if (email.search("@") === -1) {
        alert("Email must include '@' symbol");
        return false;
    } else {
        const pos = email.search("@");
        let i;
        for (i = pos + 1; i < email.length; i++) {
            if(email.charAt(i) == "@") {
                alert("Email must have only one '@' symbol");
                return false;
            }
        }
        if(email.charAt(pos + 1) == "." || email.charAt(email.length - 1) == ".") {
            alert("Symbol '.' is at the wrong position");
            return false;
        }
        if(email.search("@") === 0 || email.search("@") === email.length - 1) {
            alert("Symbol '@' is at the wrong position");
            return false;
        }
    }

    if(password !== confirmPassword){
        alert("Password and Confirm Password not match");
        return false;
    }
}