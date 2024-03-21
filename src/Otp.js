import { React, useState, useEffect } from "react";
import OTPInput from "otp-input-react";
import { useNavigate } from "react-router-dom";
import "./App.css";

const Otp = () => {
  const [OTP, setOTP] = useState("");
  const navigate = useNavigate();
  const otpSent = JSON.parse(localStorage.getItem("otp"));

  useEffect(() => alert(`Please Copy Your OTP: ${otpSent}`), []);

  const onVerify = () => {
    if (parseInt(otpSent) === parseInt(OTP)) {
      navigate("/login");
    } else {    
      alert("invaild OTP");
    }
  };

  return (
    <div className="con d-flex flex-column justify-content-start align-items-center mt-3">
      <form className=" text-center form-con p-4  mt-3 d-flex flex-column">
        <h4 className="mt-3">Verify your Email</h4>
        <p className="mt-3">
          Enter the 8 digit code you have received on swa***@gmail.com
        </p>

        <OTPInput
          className="mt-3 mb-3"
          value={OTP}
          onChange={setOTP}
          autoFocus
          OTPLength={8}
          otpType="number"
          disabled={false}
        />

        <button
          className="btn btn-dark mt-3 mb-3"
          type="submit"
          onClick={onVerify}
        >
          Verify
        </button>
      </form>
    </div>
  );
};
export default Otp;
