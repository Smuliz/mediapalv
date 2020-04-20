import React, { useContext } from 'react';
import useLoginForm from '../hooks/LoginHooks';
import { login } from '../hooks/ApiHooks';
import { MediaContext } from '../contexts/MediaContext';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';



const LoginForm = ({ history }) => {
    const [user, setUser] = useContext(MediaContext)
    const doLogin = async () => {
        try {
            const userdata = await login(inputs);
            setUser(userdata.user);
            localStorage.setItem('token', userdata.token);
            history.push('/home');
        } catch (e) {
            console.log(e.message);
        }
    };

    const { inputs, handleInputChange, handleSubmit } = useLoginForm(doLogin);
    return (
        <>
            <h1>Login</h1>
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
                <button type="submit">Login</button>
            </form>
        </>
    );
};
LoginForm.propTypes = {
    history: PropTypes.object,
};

export default withRouter(LoginForm);