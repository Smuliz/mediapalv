import React, {useContext, useEffect} from 'react'
import { Redirect } from 'react-router-dom';
import { MediaContext } from '../contexts/MediaContext';

const logout = () => {
    const [user, setUser] = useContext(MediaContext);

    useEffect(() => {
        setUser(null);
        localStorage.clear();
    },[setUser]);
    
    return (
        <Redirect to={'/home'}></Redirect>
    );
};


export default logout;
