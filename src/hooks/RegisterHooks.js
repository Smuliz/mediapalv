import { useState } from 'react';


// Luento 5, 25.3 45min objektista dynaaminen nimen haku
const useSignUpForm = (callback) => {
    const [inputs, setInputs] = useState({
        username: '',
        password: '',
        email: '',
        full_name: '',
    });
    const handleSubmit = (event) => {
        if (event) {
            event.preventDefault();
        }
        callback();
    }
    const handleInputChange = (event) => {
        event.persist();
        setInputs(inputs => ({ ...inputs, [event.target.name]: event.target.value }));
    }
    return {
        handleSubmit,
        handleInputChange,
        inputs
    };
}


export default useSignUpForm;
