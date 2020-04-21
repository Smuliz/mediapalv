import React, { useContext } from 'react';
import useSignUpForm from '../hooks/RegisterHooks';
import { register, login, checkUserAvailable } from '../hooks/ApiHooks';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MediaContext } from '../contexts/MediaContext';
import { Button, TextField, Grid } from '@material-ui/core';

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
        <Grid container>
            <Grid item xs={12}>
                <h1>Register</h1>
            </Grid>
            <Grid item xs={12}>
                <form onSubmit={handleSubmit}>
                    <Grid container>
                        <Grid container item>
                            <TextField
                            fullWidth
                                type="text"
                                name="username"
                                placeholder="Username"
                                onChange={handleInputChange}
                                value={inputs.username}
                            />
                        </Grid>
                        <Grid container item>
                            <TextField
                            fullWidth
                                type="password"
                                name="password"
                                placeholder="Password"
                                onChange={handleInputChange}
                                value={inputs.password}
                            />
                        </Grid>
                        <Grid container item>
                            <TextField
                            fullWidth
                                type="email"
                                name="email"
                                placeholder="Email"
                                onChange={handleInputChange}
                                value={inputs.email}
                            />
                        </Grid>
                        <Grid container item>
                            <TextField
                            fullWidth
                                type="text"
                                name="full_name"
                                placeholder="Full name"
                                onChange={handleInputChange}
                                value={inputs.full_name}
                            />
                        </Grid>
                        <Grid container item>
                            <Button fullWidth color="primary" type="submit" variant="contained">Register</Button>
                        </Grid>
                    </Grid>
                </form>
            </Grid>
        </Grid>
    );
};

RegisterForm.propTypes = {
    history: PropTypes.object,
};

export default withRouter(RegisterForm);