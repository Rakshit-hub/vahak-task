import { Main_Logo, THEME_COLOR } from "../lib/config";
import _JSXStyle from "styled-jsx/style";

function CustomHeader(props) {
  return (
    <>
      <div className="col-12 p-3">
        <img
          src={Main_Logo}
          alt="Main logo"
          width={110}
          height={45}
          style={{ cursor: "pointer" }}
        />
      </div>
      <div className="d-flex align-items-center justify-content-center headerContainer">
        <p>{props.title}</p>
      </div>
      <style jsx>{`
        .headerContainer {
          height: 25vh;
          background: ${THEME_COLOR};
          color: white;
          font-size: 4vw;
        }
      `}</style>
    </>
  );
}

export default CustomHeader;
