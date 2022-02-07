import React, { useState } from "react";
import "./Signup.css";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbNailError, setThumbNailError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password, displayName, thumbnail);
  };
  const handleFileChange = (e) => {
    setThumbnail(null);
    let selected = e.target.files[0];
    console.log(selected);
    if (!selected) {
      setThumbNailError("Please select a file");
      return;
    }
    if (!selected.type.includes("image")) {
      setThumbNailError("Selected file must be an Image");
      return;
    }
    if (selected.size > 1000000) {
      setThumbNailError("Image file size must be less than 10mb");
      return;
    }
    setThumbNailError(null);
    setThumbnail(selected);
    console.log("thumbnail updated");
  };
  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <label>
        <span>email :</span>
        <input
          required
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label>
        <span>password:</span>
        <input
          required
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>
      <label>
        <span>Display Name:</span>
        <input
          required
          type="text"
          onChange={(e) => setDisplayName(e.target.value)}
          value={displayName}
        />
      </label>
      <label>
        <span>profile thumbnail:</span>
        <input required type="file" onChange={handleFileChange} />
        {thumbNailError && <div className="error">{thumbNailError}</div>}
      </label>
      <button className="btn">Sign Up</button>
    </form>
  );
};

export default Signup;
