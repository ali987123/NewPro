

import   { useState, useEffect } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

      const handleSubmit = (e) => {
    e.preventDefault(); 

    if (!formData.username || !formData.password) {
      setError("Please fill all the fields");
      setSuccess(false);
      return;
    }

    if (formData.username === "ali" && formData.password === "123") {
      setSuccess(true);
      setError(""); 
    } else {
      setSuccess(false);
      setError("Invalid username or password");
    }
  };

  useEffect(() => {
    if (success) {
      alert("Login successful!");
    }
  }, [success]); 

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Login;
