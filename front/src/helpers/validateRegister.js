const validate = (userData) => {
    const errors = {}

    if (!userData.name) {
        errors.name = 'Name is required'
    }

    if (!userData.username) {
        errors.username = 'Username is required'
    }

    if (!userData.email || !/^\S+@\S+\.\S+$/.test(userData.email)) {
        errors.email = 'Invalid email address'
    }

    if (!userData.birthdate || !/^\d{4}-\d{2}-\d{2}$/.test(userData.birthdate)) {
        errors.birthdate = 'Invalid birthdate format'
    }

    if (!userData.nDni) {
        errors.nDni = 'ID is required'
    }

    if (userData.password.length < 8) {
        errors.password = 'Password must be at least 8 characters long'
    }

    if (userData.password !== userData.repassword) {
        errors.repassword = 'Passwords do not match';
    }

    return errors
}
export default validate