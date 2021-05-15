import CustomHead from "../components/Head";
import React, { useEffect } from "react";
import CustomHeader from "../components/Header";
import InputBox from "../components/inputbox";
import JourneyDetails from "../components/JourneyDetails";
import _JSXStyle from "styled-jsx/style";
import Router from "next/router";

export default function PlaceBid() {
  const [value, setValue] = React.useState("");
  const [bidDetails, setbidDetails] = React.useState({});

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSetBid = () => {
    localStorage.setItem("FORMDATA", JSON.stringify(bidDetails));
    Router.push(`/`);
  };

  useEffect(() => {
    const journeyDetails = JSON.parse(localStorage.getItem("FORMDATA"));
    let biddetils = { bidvalue: value };
    setbidDetails({...journeyDetails, ...biddetils});
    console.log({ ...journeyDetails, ...biddetils });
  }, [value]);
  return (
    <>
      <CustomHead />
      <CustomHeader title={"Place your Bid (2/4 step)"} />
      <div className="col-8 mx-auto mt-5">
        <JourneyDetails />
        <div className="col-4 mx-auto my-5 text-center d-flex w-100 justify-content-center">
          <span className="" style={{ fontSize: "4vw" }}>
            ₹{" "}
            <input
              type="number"
              style={{ fontSize: "2vw" }}
              autoComplete="off"
              className="inputType"
              onChange={(event) => handleChange(event)}
            />
          </span>
        </div>

        <div className="form-check text-center my-3">
          <label className="form-check-label">
            <input type="checkbox" className="form-check-input" value="" />
            Rate Negotiable
          </label>
        </div>

        <div className="col-12">
          {value ? (
            <button className={`w-100 btn btn-primary`} onClick={handleSetBid}>
              Next
            </button>
          ) : (
            <button className={`w-100 btn btn-outline-primary`} disabled>
              Next
            </button>
          )}
        </div>
      </div>
      <style jsx>{`
        .form-control {
          border-width: 0px !important;
          border: none !important;
        }
        .inputType {
          font-size: 4vw;
          border: none;
          border-bottom: 2px solid #000000;
          outline: 0;
          background: transparent;
        }
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }

        / Firefox / input[type="number"] {
          -moz-appearance: textfield;
        }
      `}</style>
    </>
  );
}
