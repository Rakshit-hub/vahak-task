import CustomHead from "../components/Head";
import React, { useEffect } from "react";
import CustomHeader from "../components/Header";
import JourneyDetails from "../components/JourneyDetails";
import _JSXStyle from "styled-jsx/style";
import Router from "next/router";
import Checkbox from "../components/checkbox";

export default function PlaceBid() {
  const [value, setValue] = React.useState("");
  const [bidDetails, setbidDetails] = React.useState({});

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  //Route to next page
  const handleSetBid = () => {
    localStorage.setItem("FORMDATA", JSON.stringify(bidDetails));
    Router.push(`/bid-details`);
  };

  //To get all data from localstorage
  useEffect(() => {
    const journeyDetails = JSON.parse(localStorage.getItem("FORMDATA"));
    let biddetils = { bidvalue: value };
    setbidDetails({ ...journeyDetails, ...biddetils });
    console.log({ ...journeyDetails, ...biddetils });
  }, [value]);
  return (
    <>
      <CustomHead />
      <CustomHeader title={"Place your Bid (2/4 step)"} />
      <div className="col-8 mx-auto mt-5">
        <JourneyDetails />
        <div className="col-4 mx-auto my-5 text-center  w-100 ">
          <span
            className="d-flex justify-content-center"
            style={{ fontSize: "4vw" }}
          >
            ₹{" "}
            <input
              type="number"
              style={{ fontSize: "2vw" }}
              autoComplete="off"
              className="inputType pl-2"
              onChange={(event) => handleChange(event)}
            />
          </span>
        </div>

        <Checkbox />

        <div className="col-12 mb-3">
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
