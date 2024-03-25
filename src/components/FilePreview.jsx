// FilePreview.jsx
import React from 'react';

const FilePreview = ({ files }) => {
    return (
        <div>
            {files.map((file, index) => (
                <div key={index}>
                    <img
                        src={URL.createObjectURL(file)}
                        alt={file.name}
                        style={{ maxWidth: '50px', maxHeight: '50px', display: "flex" }}
                    />
                </div>
            ))}
        </div>
    );
};

export default FilePreview;