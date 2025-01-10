
// import { useEffect, useState } from "react"

// const Registeration = () => {
// const [formData,setFormData] = useState({
//     username:"",
//     email:"",
//     password:"",
//     confirmpassword:"",
// }
// )
// const [error,setError] = useState("")
// const [success,setSuccess] = useState(false)

// const handleChange = (e)=>{
//     const {name,value} = e.target
//     setFormData({
//         ...formData,
//         [name]: value,
//     });
// }
//     const handleSubmit = (e) =>{
//         e.preventDefault();

//         if(!formData.username || !formData.email || !formData.password || !formData.confirmpassword){
//             setError("Please fill all the fields")
//             setSuccess(false)
//             return  
//         }
//         if(formData.password !== formData.confirmpassword){
//             setError("password did not match")
//             setSuccess(false)
//             return
//         }
//     }
//     setError('')
//     setSuccess(true)
//     console.log('User Registeration',formData)

//     useEffect (()=>{
//         if(success){
//             alert('user registered')
//         }
//     },[success])
// return (
        
//         <div >
//       <h2>Register</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="username"
//           placeholder="Username"
//           value={formData.username}
//           onChange={handleChange}
//         //   style={styles.input}
//           required
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//         //   style={styles.input}
//           required
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={handleChange}
//         //   style={styles.input}
//           required
//         />
//         <input
//           type="password"
//           name="confirmPassword"
//           placeholder="Confirm Password"
//           value={formData.confirmPassword}
//           onChange={handleChange}
//         //   style={styles.input}
//           required
//         />
//         <button type="submit" >
//           Register
//         </button>
//         {error && <p >{error}</p>}
//         {success && <p>Registration successful!</p>}
//       </form>
//         </div>
//   )
// }

// export default Registeration





import  { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
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

 
    if (!formData.username || !formData.email || !formData.password || !formData.confirmPassword) {
      setError("Please fill in all the fields.");
      setSuccess(false);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      setSuccess(false);
      return;
    }

    setError("");
    setSuccess(true);
    console.log("User registered:", formData); 
  };

  return (
    <div >
      <h2>Register</h2>
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
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
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
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
  
          required
        />
        <button type="submit" >
          Register
        </button>
        {error && <p >{error}</p>}
        {success && <p >Registration successfull!</p>}
      </form>
    </div>
  );
};

// const styles = {
//   container: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//     height: "100vh",
//     backgroundColor: "#f4f4f4",
//   },
//   form: {
//     display: "flex",
//     flexDirection: "column",
//     width: "300px",
//   },
//   input: {
//     padding: "10px",
//     marginBottom: "15px",
//     border: "1px solid #ccc",
//     borderRadius: "5px",
//     fontSize: "16px",
//   },
//   button: {
//     padding: "10px",
//     backgroundColor: "#007bff",
//     color: "#fff",
//     border: "none",
//     borderRadius: "5px",
//     cursor: "pointer",
//     fontSize: "16px",
//   },
//   error: {
//     color: "red",
//     marginTop: "10px",
//   },
//   success: {
//     color: "green",
//     marginTop: "10px",
//   },
// };

export default Register;
