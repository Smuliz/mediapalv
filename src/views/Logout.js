import React from 'react'
import { Redirect } from 'react-router-dom';

const logout = () => {
    const [user, setUser] = useContext(MediaContext);

    useEffect(() => {
        setUser(null);
        localStorage.clear();
    },[]);
    
    return (
        <Redirect to={'/home'}></Redirect>
    );
};


export default logout;
