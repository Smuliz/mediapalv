import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import CatRow from './catRow';

const baseUrl = 'http://media.mw.metropolia.fi/wbma/';

const CatTable = () => {
    //const {media} = props;
    const [picArray, setPicArray] = useState([]);
    const loadMedia = async () => {
        const response = await fetch(baseUrl + 'media');
        const json = await response.json();
        const items = await Promise.all(json.map(async (item) => {
            const response = await fetch(baseUrl + 'media/' + item.file_id);
            return await response.json();
        }));
        console.log(json);
        setPicArray(items);
    };

    useEffect(() => {
        loadMedia();
    }, []);

    
    return (
        <table>
            <tbody>
            {
            picArray.map((file, index) => <CatRow file={file} key={index}/>)
            }
            </tbody>
        </table>
    );
};

CatTable.propTypes = {
    media: PropTypes.array,
};

export default CatTable;