
const validate = (userData) => {
    const errors = {};

    if (userData.time) {
        const timeValue = userData.time.split(":").map(Number);
        const hour = timeValue[0];
        const minute = timeValue[1];
        if (hour < 8 || hour > 18 || (hour === 18 && minute !== 0)) {
            errors.time = 'La hora debe estar entre las 8:00 y las 18:00'
        } 
    }

    if (!userData.time) {
        errors.time = 'Time is required';
    }

    if (!userData.date) {
        errors.date = 'Date is required';
    }else {
        const selectedDate = new Date(userData.date);
        const currentDate = new Date();
        currentDate.setHours(0, 0, 0, 0);
        if (selectedDate <= currentDate) {
            errors.date = 'La fecha debe ser mayor que la fecha actual';
        }
    }

    if (!userData.description) {
        errors.description = 'Description is required';
    }

    return errors;
}

export default validate;