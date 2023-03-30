import React, { useState } from "react";
import axios from "axios";

const ImageUpload = () => {
  const api = "http://localhost:8000/api/posts/";
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [submited, setSubmited] = useState(null);
  const [bImage, setbImage] = useState(null);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
    setImageUrl(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("image", image);

    axios
      .post(api, formData)
      .then((response) => {
        console.log(response.data);
        setSubmited(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (imageUrl && submited) {
    return (
      <>
        <div>
          <h2>{title}</h2>
          <img width={"500px"} height={"500px"} src={imageUrl} alt={title} />
        </div>
      </>
    )
  }
  else
    return (
      <>
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="title">Title:</label>
              <input type="text" id="title" value={title} onChange={handleTitleChange} />
            </div>
            <div>
              <label htmlFor="image">Image:</label>
              <input type="file" id="image" onChange={handleImageChange} />
            </div>
            <button type="submit">Upload</button>
          </form>
        </div>
      </>
    );
};

export default ImageUpload;


