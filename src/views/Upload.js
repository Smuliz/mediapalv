import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import useUploadForm from '../hooks/UploadHooks';
import { upload } from '../hooks/ApiHooks';

const Upload = ({ history }) => {
    const doUpload = async () => {
        try {
            const result = await upload(inputs, localStorage.getItem('token'));
            // console.log(result);
            setTimeout(() => {
                history.push('/home');
            }, 2000);
        } catch (e) {
            console.log(e.message);
        }
        //console.log(json);
    };

    const { inputs, setInputs, handleInputChange, handleSubmit, handleFileChange } = useUploadForm(doUpload);

    useEffect(() => {
        const reader = new FileReader();

        reader.addEventListener('load', () => {
            setInputs((inputs) => {
                return {
                    ...inputs,
                    dataUrl: reader.result,
                };
            });
        }, false);
        if (inputs.file !== null) {
            reader.readAsDataURL(inputs.file);
        }
    }, [inputs.file, setInputs])

    return (
        <>
            <h1>Upload</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="title"
                    value={inputs.title}
                    onChange={handleInputChange}
                />
                <textarea
                    name="description"
                    value={inputs.description}
                    onChange={handleInputChange}
                ></textarea>
                <input
                    type="file"
                    name="file"
                    accept="image/*,video/*,audio/*"
                    onChange={handleFileChange}
                />
                <button type="submit">Upload</button>

            </form>
            <img src={inputs.dataUrl} alt="" />
        </>
    );
};

Upload.propTypes = {
    history: PropTypes.object,
};

export default Upload;