import React from 'react';
// , { useState, useEffect }
import PropTypes from 'prop-types';
import CatRow from './catRow';

// const CatTable = async () => {
    // const [picArray, setPicArray] = useState([]);
    // const loadMedia = async () => {
    //     const response = await fetch('test.json');
    //     const json = await response.json();
    //     console.log(json);
    //     setPicArray(json);
    // };
    // useEffect(() => {
    //     loadMedia();
    // }, []);
const CatTable = ({media}) => {

    return (
        <table>
            <tbody>
                {
                    media.map((file, index) => <CatRow file={file} key={index} />)
                }
            </tbody>
        </table>
    );
            };

    CatTable.propTypes = {
        media: PropTypes.array,
    };

    export default CatTable;