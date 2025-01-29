
import React, { useState } from "react";
import axios from "axios";

function AddPostPage() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", image);

    try {
      // Send a POST request to your server
      const response = await axios.post("http://localhost:5000/api/posts", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.data) {
        setMessage("Post submitted successfully!");
        setTitle("");
        setImage(null);
        setDescription("");
      }
    } catch (error) {
      console.error("Error submitting post:", error);
      setMessage("Error submitting post. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-post-page">
      <div className="form-container">
        <h2>Add a New Blog Post</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Blog Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          {/* File input to choose image */}
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />

          {image && (
            <p style={{ marginTop: "10px", fontSize: "14px", color: "#555" }}>
              Selected Image: {image.name}
            </p>
          )}

          <textarea
            placeholder="Enter Blog Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <button type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Submit Post"}
          </button>
        </form>

        {message && (
          <p style={{ marginTop: "20px", color: message.startsWith("Error") ? "red" : "green" }}>
            {message}
          </p>
        )}
      </div>
    </div>
  );
}

export default AddPostPage;
