import React, { useContext } from 'react';
import useSignUpForm from '../hooks/RegisterHooks';
import { register, login, checkUserAvailable } from '../hooks/ApiHooks';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MediaContext } from '../contexts/MediaContext';


const RegisterForm = ({ history }) => {
    // eslint-disable-next-line no-unused-vars
    const [user, setUser] = useContext(MediaContext);
    const doRegister = async () => {
        try {
            await checkUserAvailable(inputs.username);
            await register(inputs);
            const userdata = await login(inputs);
            setUser(userdata.user);
            localStorage.setItem('token', userdata.token);
            history.push('/home');
        } catch (e) {
            console.log("register form", e.message)
        }
    };



    const { inputs, handleInputChange, handleSubmit } = useSignUpForm(doRegister);
    return (
        <>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    onChange={handleInputChange}
                    value={inputs.username}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleInputChange}
                    value={inputs.password}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleInputChange}
                    value={inputs.email}
                />
                <input
                    type="text"
                    name="full_name"
                    placeholder="Full name"
                    onChange={handleInputChange}
                    value={inputs.full_name}
                />
                <button type="submit">Register</button>
            </form>
        </>
    );
};

RegisterForm.propTypes = {
    history: PropTypes.object,
};

export default withRouter(RegisterForm);