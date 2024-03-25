// UploadFile.jsx
import {useState} from 'react';

const UploadFile = ({ onFileChange }) => {
    const [files, setFiles] = useState([]);

    const handleFileInputChange = (event) => {
        const newFiles = Array.from(event.target.files);
        setFiles(newFiles);
        onFileChange(newFiles);
    };

    const handleUpload = () => {
        if (files.length > 0) {
            // Perform file upload operation here
            console.log('Uploading files:', files);
            // You can use fetch, axios, or any other library to send the files to a server
        } else {
            alert('Please select at least one file');
        }
    };

    return (
        <div>
            <label htmlFor="fileInput">
                Choose
                <input
                    id="fileInput"
                    type="file"
                    multiple
                    style={{ display: 'none' }}
                    onChange={handleFileInputChange}
                />
            </label>
            <button
                type="button"
                className="border bg-slate-500 px-1"
                onClick={handleUpload}
            >
                Upload
            </button>
        </div>
    );
};

export default UploadFile;