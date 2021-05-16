import Router from "next/router";
import { Edit_Logo, GREY_COLOR } from "../lib/config";

function BidDetails(props) {
  const { bidDetails } = props;
  const handleRoute = () => {
    Router.push(`/bid-details`);
  };
  return (
    <>
      <div className="row align-items-center journeyBlock pb-3">
        <div className="col-8">
          <p className="details">Bid Details</p>
          <h5 className="mb-1">
            + 91-{bidDetails.phone}{" "}
            <span onClick={handleRoute}>
              {
                <img
                  src={Edit_Logo}
                  height={19}
                  width={19}
                  style={{ cursor: "pointer" }}
                />
              }
            </span>
          </h5>
          <h5 className="mb-1">{bidDetails.name}</h5>
          <h5 className="mb-1">Call immedaitely if required</h5>
        </div>
        <div className="col-4">
          <h3 style={{ fontSize: "3vw" }}>₹ {bidDetails.bidvalue}</h3>
          <p className="details">fixed price</p>
        </div>
      </div>
      <style jsx>
        {`
          .details {
            color: ${GREY_COLOR};
          }
          .journeyBlock {
            border-bottom: 1px dotted ${GREY_COLOR};
          }
        `}
      </style>
    </>
  );
}
export default BidDetails;
