import Image from "next/image";
import CustomHeader from "../components/Header";
import InputBox from "../components/inputbox";
import React, { useEffect, useState } from "react";
import CustomHead from "../components/Head";
// import styles from "../styles/Home.module.css";

export default function Home() {
  const [source, setSource] = React.useState({});
  const [destination, setDestination] = React.useState({});
  const [formData, setFormData] = React.useState([]);
  const [option, setOption] = React.useState({ type: "HatchBack" });
  const [value, setValue] = React.useState("");
  const [person, setPerson] = React.useState({});

  const handleSource = (event) => {
    let source = { source: event.target.value };
    setSource(source);
  };

  const handleDestination = (event) => {
    console.log(source);
    let destination = { destination: event.target.value };
    setDestination(destination);
  };

  const handleDropDownData = (event) => {
    let option = { type: event.target.value };
    setOption(option);
  };

  const handleTravellerData = (event) => {
    setValue(event.target.value);
    if (option.type == "SUV") {
      if (event.target.value > 6) {
        alert("select within 6 ");
        setValue(6);
      }
    } else {
      if (event.target.value > 4) {
        alert("Select within 4");
        setValue(4);
      }
    }
    let person = { person: event.target.value };
    setPerson(person);
  };

  const checkFormValid = () => {
    formData.source && formData.destination && formData.person && formData.type
      ? localStorage.setItem("FORMDATA", JSON.stringify(formData))
      : alert("All Fields are mandatory, Please fill all fields");
    console.log(formData);
  };

  useEffect(() => {
    let formData = { ...source, ...destination, ...option, ...person };
    setFormData(formData);
    console.log(formData);
  }, [source, destination, option, person]);

  return (
    <div>
      <CustomHead />
      <CustomHeader title={"Place your Bid(1/4 step)"} />

      <div className="col-8 mx-auto my-5">
        <div className="row">
          <div className="col-xl-6 col-md-6 col-sm-12">
            <div className="contact_box">
              <label className="d-block">Source Location *</label>
              <InputBox
                type="text"
                className="inputBox form-control"
                autoFocus={true}
                placeholder="John Doe"
                autoComplete="off"
                onChange={(event) => handleSource(event, "source")}
              ></InputBox>
            </div>
          </div>
          <div className=" col-xl-6 col-md-6 col-sm-12">
            <div className="contact_box">
              <label className="d-block">Destination *</label>
              <InputBox
                type="text"
                className="inputBox form-control"
                autoFocus={true}
                placeholder="John Doe"
                autoComplete="off"
                onChange={(event) => handleDestination(event, "source")}
              ></InputBox>
            </div>
          </div>
          <div className="col-12 my-3">
            <label className="d-block">Car Type *</label>
            <select
              className="form-control"
              onChange={(e) => handleDropDownData(e)}
            >
              <option value="HatchBack">HatchBack</option>
              <option value="Sedan">Sedan</option>
              <option value="SUV">SUV</option>
            </select>
          </div>
        </div>
        <div className="col-12">
          <label className="d-block">No of Travellers *</label>
          <InputBox
            type="number"
            className="inputBox form-control"
            autoFocus={true}
            placeholder="John Doe"
            autoComplete="off"
            min="1"
            max={option.type == "SUV" ? "6" : "4"}
            value={value}
            onChange={(event) => handleTravellerData(event)}
          ></InputBox>
        </div>
        <div className="col-12 my-4 btn btn-primary" onClick={checkFormValid}>
          Enter Bid Details
        </div>
      </div>
    </div>
  );
}
