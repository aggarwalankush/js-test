function solution() {
    var type = "person";
    var firstName = "John";
    var lastName = "Doe";
    var email = "john@example.com";
    var companyName = "";
    var phone = "234-567-890";


    // var type = "company";
    // var firstName = "John";
    // var lastName = "Doe";
    // var email = "john@example.com";
    // var companyName = "ACME";
    // var phone = "12-3";

    if (type === 'person') {

        return !isEmpty(firstName) && !isEmpty(lastName) && validEmail(email);

    } else if (type === 'company') {
        return !isEmpty(companyName) && validPhone(phone);
    }
    return false;

}

function isEmpty(name) {
    return !name;
}

function validEmail(email) {
    if (isEmpty(email)) {
        return false;
    }
    var emailParts = email.split("@");
    if (!emailParts || emailParts.length !== 2) {
        return false;
    }

    function validEmailPart(emailPart) {
        if (isEmpty(emailPart) || emailPart.length > 64) {
            return false;
        }
        for (var i = 0; i < emailPart.length; i++) {
            var currentChar = emailPart.charAt(i);
            if (!((currentChar >= 'A' && currentChar <= 'Z')
                    || (currentChar >= 'a' && currentChar <= 'z')
                    || (currentChar >= 0 && currentChar <= 9)
                    || currentChar === '.')) return false;
        }
        return true;
    }

    return validEmailPart(emailParts[0]) && validEmailPart(emailParts[1]);
}

function validPhone(phone) {
    if (isEmpty(phone) || phone.length < 6) {
        return false;
    }
    var digitCount = 0;
    for (var i = 0; i < phone.length; i++) {
        var currentChar = phone.charAt(i);
        if (currentChar >= 0 && currentChar <= 9) {
            digitCount++;
        } else if (!(currentChar === ' ' || currentChar === '-')) {
            return false;
        }
    }
    return digitCount >= 6;
}

console.log(solution());