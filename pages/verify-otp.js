import React, { useEffect } from "react";
import BidDetails from "../components/bid-details";
import CustomHead from "../components/Head";
import CustomHeader from "../components/Header";
import JourneyDetails from "../components/JourneyDetails";
import OtpField from "../components/otpfield";

export default function VerifyPtp() {
  const [bidDetails, setBidDetails] = React.useState({});
  //getting data from localstorage and maintaing it in a state
  useEffect(() => {
    const bidDetails = JSON.parse(localStorage.getItem("FORMDATA"));
    setBidDetails(bidDetails);
    console.log(bidDetails);
  }, []);
  return (
    <>
      <CustomHead />
      <CustomHeader title={"Verify OTP (3/4 step)"} />
      <div className="col-8 mx-auto mt-5">
        <JourneyDetails />
        <BidDetails bidDetails={bidDetails} />
        <OtpField bidDetails={bidDetails}/>
      </div>
    </>
  );
}
