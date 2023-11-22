
export const LoginValidation = (loginSignUpValues) => {
    const isValidEmail = (email) => {
        // This is a basic regular expression for email validation
        const emailRegex =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        return emailRegex.test(email);
    };

    let errors = {};
    if (!loginSignUpValues.email) {
        errors.email = "Email is required";
    } else if (!isValidEmail(loginSignUpValues.email)) {
        errors.email = "Email is invalid";
    }
    if (!loginSignUpValues.password) {
        errors.password = "Password is required";
    } else if (loginSignUpValues.password.length < 6) {
        errors.password = "Password needs to be 6 characters or more";
    }
    
    return errors;
}
