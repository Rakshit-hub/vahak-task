import Router from "next/router";
import React, { useEffect } from "react";
import _JSXStyle from "styled-jsx/style";
import { Edit_Logo, GREY_COLOR, THEME_COLOR } from "../lib/config";

function JourneyDetails() {
  const [journeyDetails, setJourneyDetails] = React.useState({});

  //getting data from localstorage and maintaing it in a state
  useEffect(() => {
    const journeyDetails = JSON.parse(localStorage.getItem("FORMDATA"));
    setJourneyDetails(journeyDetails);
    console.log(journeyDetails);
  }, []);

  //when user clicks on edit icon, redirect to HomePage
 const RoutetoHome = () => {
    Router.push(`/`);
  };

  return (
    <>
      <div className="row py-3 align-items-center journeyBlock">
        <div className="col-8">
          <p className="details">Journey Details</p>
          <h5 className="mb-0">
            {journeyDetails.source}-{journeyDetails.destination}
          </h5>
          <h5>
            {journeyDetails.person} persons,{journeyDetails.type}
          </h5>
        </div>
        <div
          className="col-4"
          style={{ cursor: "pointer" }}
          onClick={RoutetoHome}
        >
          <div className="d-flex align-items-center">
            <img src={Edit_Logo} height={30} width={30} />
            <p className="mb-0 mx-2">Edit</p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .details {
          color: ${GREY_COLOR};
        }
        .journeyBlock {
          border-bottom: 1px dotted ${GREY_COLOR};
        }
      `}</style>
    </>
  );
}
export default JourneyDetails;
