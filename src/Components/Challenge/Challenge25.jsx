// Create a React application that allows users to upload a file and displays its contents on the screen.

import React, { useState, useCallback } from 'react'
import {useDropzone} from 'react-dropzone'


const FileUpload = () => {
    const [files, setFiles] = useState([]);

    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
        const newFiles = acceptedFiles.map(file => ({
            file,
            content: URL.createObjectURL(file),
            type: file.type.startsWith('image/') ? 'image' : (file.type === 'application/pdf' ? 'pdf' : 'text')
        }));
        setFiles([...files, ...newFiles])
    }, [files])

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    const handleDelete = (index)=>{
        const updatedFiles = [...files];
        updatedFiles.splice(index, 1);
        setFiles(updatedFiles)
    }

    return (
        <div>
            <div {...getRootProps()} style={dropZoneStyles}>
                <input {...getInputProps()} />
                <p className='para'>
                    Drag 'n' drop files here, or click to select files
                </p>
            </div>
            {
                files.length > 0 && (
                    <div>
                        <h2 className="para">
                            Files:
                        </h2>
                        {
                            files.map((file, index) => (
                                <div key={index} style={{marginBottom: '20px'}}>    
                                {file.type === 'image' &&(
                                    <img src={file.content} alt={`File ${index}`} style={{maxWidth: '100%', maxHeight: '100px'}}/>
                                )}
                                 {file.type === 'pdf' &&(
                                    <embed src={file.content} type="application/pdf" width="200px" height="100px"/>
                                )}
                                 {file.type === 'text' &&(
                                    <pre style={{whiteSpace: 'pre-wrap'}}>
                                        {file.content}
                                    </pre>
                                )}
                                <button onClick={()=> handleDelete(index)} className='btn btn-danger mx-2'>
                                    Delete
                                </button>
                                </div>
                            ))
                        }
                    </div>
                )
            }
        </div>
    )

}
const dropZoneStyles = {
    border: '2px dashed #0087F7',
    borderRadius: '4px',
    padding: '20px',
    textAlign: 'center',
    cursor: 'pointer',
    marginTop: '20px'
}
const Challenge25 = () => {
    return (
        <section className="landing-section">
            <div className="row container">
                <h1 className="landing-heading">
                    File Upload and Display
                </h1>
                <FileUpload />
            </div>
        </section>
    )
}

export default Challenge25