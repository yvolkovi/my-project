
const validate = (name, value, required, pattern) => {
    const newErrors = [];

    if(required){
        if(!value){
            newErrors.push(`${name} is required`);
        }
    }

    if(pattern){
        if(!pattern.test(value)){
            newErrors.push(`${name} is invalid`);
        }
    }

    return newErrors;
}

export default validate;