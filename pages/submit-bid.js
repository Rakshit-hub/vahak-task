import React, { useEffect } from "react";
import BidDetails from "../components/bid-details";
import CustomHead from "../components/Head";
import CustomHeader from "../components/Header";
import JourneyDetails from "../components/JourneyDetails";

export default function SubmitBid() {
  const [bidDetails, setBidDetails] = React.useState({});
  
  //getting data from localstorage and maintaing it in a state
  useEffect(() => {
    const bidDetails = JSON.parse(localStorage.getItem("FORMDATA"));
    setBidDetails(bidDetails);
    console.log(bidDetails);
  }, []);

  const handleSubmit = () => {
    alert("Bid Submitted sucessfully");
  };
  return (
    <>
      <CustomHead />
      <CustomHeader title={`Summary and Submit Bid (4/4 step)`} />
      <div className="col-8 mx-auto mt-5 py-3">
        <JourneyDetails />
        <BidDetails bidDetails={bidDetails} />
        <div className="col-12 my-3">
          <button className="w-100 btn btn-primary" onClick={handleSubmit}>
            Submit Bid
          </button>
        </div>
      </div>
    </>
  );
}
