import { useState } from "react";
import cryptoRandomString from "crypto-random-string";
import "./App.css";
import { useNavigate } from "react-router-dom";

import { v4 as uuidv4 } from "uuid";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameError,setnameError]=useState(false)
  const [emailError,setEmailError]=useState(false)
  const [passwordError,setPasswordError]=useState(false)
  const [password, setPassword] = useState("");
  const otp = cryptoRandomString({ length: 8, type: "numeric" });
  const navigate = useNavigate();
  function getUsersListFromLocalStorage() {
    let stringifiedUsersList = localStorage.getItem("usersList");
    let parsedUsersList = JSON.parse(stringifiedUsersList);
    if (parsedUsersList === null) {
      return [];
    } else {
      return parsedUsersList;
    }
  }

  let signupList = getUsersListFromLocalStorage();

  // Handling the name change
  const handleName = (e) => {
    setName(e.target.value);
  };

  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
   

    if (!name){
      setnameError(true)
    }
    if (! /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
      setEmailError(true)
    }
    if (!password){
      setPasswordError(true)
    }
      if (name && email && password && signupList.length == 0) {
        const item = {
          id: uuidv4(),
          email,
          password,
        };

        const otpValue = JSON.stringify(otp);
        localStorage.setItem("otp", otpValue);
        const parsed = JSON.stringify([...signupList, item]);
        localStorage.setItem("usersList", parsed);

        setTimeout(() => {
          navigate("/otp");
        }, 500);
      }

    if (name && email && password && signupList.length > 0) {
      const foundUser = signupList.find((item) => item.email === email);
      if (foundUser) {
        alert("User Already Exists");
      } else {
        const item = {
          id: uuidv4(),
          email,
          password,
        };

        const otpValue = JSON.stringify(otp);
        localStorage.setItem("otp", otpValue);
        const parsed = JSON.stringify([...signupList, item]);
        localStorage.setItem("usersList", parsed);

        setTimeout(() => {
          navigate("/otp");
        }, 500);
      }
    }
  };

  return (
    <div className=" con m-0 p-0 d-flex flex-column justify-content-center align-items-center">
      <form className=" form-con p-4 w-25 mt-2 d-flex flex-column">
        <h4 className="text-center">Create your account</h4>
        <label className="label">Name</label>
        <input
          onChange={handleName}
          placeholder="Enter"
          className="input mb-3"
          value={name}
          type="text"
          required
        />
        {
          name || nameError==false?
       null
       :
       <p className="text-danger">Please enter the name</p>
       }
        <label className="label">Email</label>
        <input
          onChange={handleEmail}
          placeholder="Enter"
          className="input  mb-3"
          value={email}
          type="email"
          required
        />
         {
          /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || emailError==false?
       null
       :
       <p className="text-danger">Please enter the email</p>
       }
        <label className="label">Password</label>
        <input
          onChange={handlePassword}
          className="input mb-3"
          value={password}
          placeholder="Enter"
          type="password"
          required
        />
 {
          password || passwordError==false?
       null
       :
       <p className="text-danger">Please enter the password</p>
       }
        <button onClick={handleSubmit} className="btn btn-dark  mb-3">
          Create account
        </button>
        <div className="d-flex justify-content-center">
          <p className="mr-2">Have an account?</p>
          <p className="h-over" onClick={()=>navigate('/login')}>LOGIN</p>
        </div>
      </form>
    </div>
  );
}
