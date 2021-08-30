//import { lowerCase, upperCase } from "lodash";
import { useState, useEffect } from "react" 

export const usePasswordValidation = ({ 
    firstPassword = "", 
    requiredLength = 10,
    
    }) => {
    const [validLength, setValidLength] = useState(null);
    const [hasNumber, setHasNumber] = useState(null);
    const [upperCase, setUpperCase] = useState(null);
    const [lowerCase, setLowerCase] = useState(null);
    const [specialChar, setSpecialChar] = useState(null);
    

    useEffect(() => {
        setValidLength(firstPassword.length >= 10 ? true : false);
        setUpperCase(firstPassword.toLowerCase() !== firstPassword);
        setLowerCase(firstPassword.toUpperCase() !== firstPassword);
        setHasNumber(/\d/.test(firstPassword));
        setSpecialChar(/[`!@#$%^&*()_+\-=\]{};':"\\|/,.<>?~]/.test(firstPassword));
    }, [firstPassword, requiredLength]);


return [validLength, hasNumber, upperCase, lowerCase, specialChar];
};