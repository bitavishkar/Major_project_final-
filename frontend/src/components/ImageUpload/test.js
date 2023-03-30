import React, { useState } from "react";
import axios from "axios";

const ImageUpload = () => {
    const api = "http://localhost:8000/api/posts/";
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState("");
    const [resStatus, setSetStatus] = useState(false);
    const [processedImage, setProcessedImage] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);

        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                processedImage(reader.result);
            };
        }

    };

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append("image", file);
        formData.append("title", title);

        try {
            const response = await axios.post(api, formData);
            // console.log(response.status);
            // console.log(response.data);

            if (response.status == 201) {
                setSetStatus(true);
                console.log(response.data.image);
                setProcessedImage(response.data.image);
                console.log(file);
            }
        } catch (error) {
            console.error(error);
        }
    };



    if (resStatus) {
        return <>
            {processedImage && (
                <img
                    src={processedImage}
                    alt="Processed Image"
                    style={{ maxWidth: '100%', marginTop: '20px' }}
                />
            )}
        </>
    }
    else
        return (
            <>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="title-input"></label>
                        <input
                            placeholder="ENTER THE TITLE"
                            id="title"
                            type="text"
                            value={title}
                            onChange={handleTitleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="file-input"></label>
                        <input
                            id="image"
                            type="file"
                            accept="image/jpg, image/jpeg, image/png"
                            onChange={handleFileChange}
                        />
                    </div>
                    <div>
                        <button className="btn btn-primary btn-lg btn-block" type="submit">  Submit </button>
                    </div>
                </form>
            </>

        );
};

export default ImageUpload;

