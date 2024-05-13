const validate = (userData) => {
    const errors = {}

    if(!userData.username){
        errors.name = 'Username field is required'
    }

    if(!userData.password){
        errors.password = 'Password is required'
    }

    return errors
}

export default validate