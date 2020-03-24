import React from 'react';
import PropTypes from 'prop-types';
import MediaRow from './MediaRow';
import {useAllMedia} from '../hooks/ApiHooks';


const MediaTable = () => {
    const picArray = useAllMedia();


    
    return (
        <table>
            <tbody>
            {
            picArray.map((file, index) => <MediaRow file={file} key={index}/>)
            }
            </tbody>
        </table>
    );
};

MediaTable.propTypes = {
    media: PropTypes.array,
};

export default MediaTable;