export const LoginSignupValidation = (loginSignUpValues) => {
    let errors = {};
    if (!loginSignUpValues.name) {
        errors.name = "Name is required";
    }
    if (!loginSignUpValues.email) {
        errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(loginSignUpValues.email)) {
        errors.email = "Email is invalid";
    }
    if (!loginSignUpValues.password) {
        errors.password = "Password is required";
    } else if (loginSignUpValues.password.length < 6) {
        errors.password = "Password needs to be 6 characters or more";
    }
    if (!loginSignUpValues.password2) {
        errors.password2 = "Password is required";
    } else if (loginSignUpValues.password2 !== loginSignUpValues.password) {
        errors.password2 = "Passwords do not match";
    }
    return errors;
}