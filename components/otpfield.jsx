import Router from "next/router";
import React, { useEffect } from "react";
import OtpInput from "react-otp-input";
// const demo={width:5}
function OtpField(props) {
  const [otp, setOtp] = React.useState("");
  const { bidDetails } = props;
  const handleChange = (otp) => {
    setOtp(otp);
    if (otp.length > 3) {
      if (otp == 1234) {
        Router.push(`/submit-bid`);
      } else {
        alert("Please enter valid otp");
        setOtp("");
      }
    }
  };

  const handleOtp = () => {
    alert("Please Enter a valid otp");
    setOtp("");
  };

  const handleResend = () => {
    setOtp("");
  };

  return (
    <>
      <div className="col-12 py-2">
        <p style={{ fontSize: "1vw" }}>
          We have sent OTP to your mobile number.Please Enter below to submit
          your bid
          <strong> +91 {bidDetails.phone}</strong>
        </p>
        <OtpInput
          value={otp}
          onChange={handleChange}
          numInputs={4}
          separator={<span>-</span>}
          inputStyle={{
            height: "5vw",
            position: "relative",
            width: "100%",
            fontWeight: "bold",
          }}
        />
      </div>
      <div className="col-12 text-center">
        <a onClick={handleResend} style={{ cursor: "pointer" }}>
          Resend OTP again
        </a>
      </div>
      <div className="col-12 my-3" onClick={handleOtp}>
        <button className="w-100 btn btn-primary"> Verify Otp</button>
      </div>
    </>
  );
}

export default OtpField;
