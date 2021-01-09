var email = 'GeeksForGeeks@gml.com';

function isEmail(email) {
    var regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // Converting the email to lowercase 
    const checkEmail = regexp.test(String(email).toLowerCase());
    if (checkEmail == true) {
        console.log(true)
        return true
    } else {
        console.log(false)
        return false
    }
}

// isEmail(email)

function myFunction() {
    var regexp = /^\d+\.\d{0,2}$/;

    const verifyNumber = regexp.test('11223')

    console.log(verifyNumber)
}

myFunction()