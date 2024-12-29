import { useState } from 'react';
import AlertSuccess from "./floatUI/AlertSuccess.jsx";


const UploadFile = ({ onFileChange, promptData, onResponse }) => {
    const [files, setFiles] = useState([]);


    const handleFileInputChange = (event) => {
        const newFiles = Array.from(event.target.files);
        setFiles(newFiles);
        onFileChange(newFiles);
    };

    const handleUpload = () => {
        if (files.length > 0) {
            // Create a FormData object
            const formData = new FormData();

            // Append each file to the FormData object
            files.forEach(file => {
                formData.append('avatar', file);
            });

            formData.append('promptData', promptData);

            // Send the FormData object to the server using fetch
            fetch('https://interact-ai-be.vercel.app/images', {
                method: 'POST',
                body: formData,
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Failed to upload files');
                    }
                    return response.json();
                })
                .then(data => {
                    // Handle successful response
                    alert("File uploaded successfully")
                    // setIsReceived("File uploaded Successfully")
                    onResponse(data.imgResult);
                    console.log('Files uploaded successfully->>>:', data.imgResult);
                })
                .catch(error => {
                    // Handle error
                    console.error('Error uploading files:', error);
                });
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
                    name="avatar" // needs to be same for multer
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
