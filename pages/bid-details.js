import React, { useEffect } from "react";
import CustomHead from "../components/Head";
import CustomHeader from "../components/Header";
import JourneyDetails from "../components/JourneyDetails";
import Checkbox from "../components/checkbox";
import InputBox from "../components/inputbox";
import  Router  from "next/router";

export default function BidDetails() {
  const [bidDetails, setBidDetails] = React.useState({});
  const [Name, setName] = React.useState({});
  const [phone, setPhone] = React.useState({});
  const [formData, setFormData] = React.useState({});
  useEffect(() => {
    const BidDetails = JSON.parse(localStorage.getItem("FORMDATA"));
    setBidDetails(BidDetails);
  }, []);

  const handleNameChange = (event) => {
    let Name = { name: event.target.value };
    setName(Name);
  };

  const handleNext = () => {
    formData && formData.phone && formData.name
      ? handleRoute()
      : alert("Enter mandatory fields");
  };

  const handleRoute = () => {
    localStorage.setItem("FORMDATA", JSON.stringify(formData));
    Router.push(`/`);
  };

  const handlePhoneChange = (event) => {
    let phone = { phone: event.target.value };
    setPhone(phone);
  };

  useEffect(() => {
    let formData = { ...bidDetails, ...Name, ...phone };
    setFormData(formData);
    console.log({ formData });
  }, [Name, phone]);

  const phoneValidation = (inputtxt) => {
    if (inputtxt.length > 1) {
      let phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
      if (inputtxt.match(phoneno)) {
        return true;
      } else {
        alert("Not a valid Phone Number");
        return false;
      }
    }
  };

  return (
    <>
      <CustomHead />
      <CustomHeader title={"Place your Bid (2/4 step)"} />
      <div className="col-8 mx-auto mt-5">
        <JourneyDetails />
        <div className="col-4 mx-auto my-5 text-center d-flex w-100 justify-content-center">
          <span className="" style={{ fontSize: "5vw", fontWeight: "bold" }}>
            ₹ <span>{bidDetails.bidvalue}</span>
          </span>
        </div>
        <Checkbox />
        <div className="col-12 mb-2">
          <label className="d-block mb-2 fw-bold">
            Enter your 10 digit mobile Number *
          </label>
          <input
            type="tel"
            maxlength="10"
            name="mobile"
            pattern="[1-9]{1}[0-9]{9}"
            title="Enter 10 digit mobile number"
            placeholder="Mobile number"
            className="form-control"
            onBlur={(e) => phoneValidation(e.target.value)}
            onChange={(e) => handlePhoneChange(e)}
            required
          />
        </div>
        <div className="col-12 mb-2">
          <label className="d-block mb-2 fw-bold">Enter your Name *</label>
          <InputBox
            type="text"
            className="inputBox form-control"
            autoFocus={true}
            placeholder="John Doe"
            autoComplete="off"
            onChange={(event) => handleNameChange(event)}
          ></InputBox>
        </div>
        <div className="col-12 mb-2">
          <label className="d-block mb-2 fw-bold">
            Enter Remarks(Optional)
            <InputBox
              type="text"
              className="inputBox form-control"
              autoFocus={true}
              placeholder="Remarks"
              autoComplete="off"
            ></InputBox>
          </label>
        </div>
        <div className="col-12 my-2">
          <button className="w-100 btn btn-primary" onClick={handleNext}>
            Verify Via OTP
          </button>
        </div>
      </div>
    </>
  );
}
