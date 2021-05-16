import { Main_Logo, THEME_COLOR } from "../lib/config";
import _JSXStyle from "styled-jsx/style";
import  Router  from "next/router";

function CustomHeader(props) {
  return (
    <>
      <div className="col-12 p-3">
        <img
          src={Main_Logo}
          alt="Main logo"
          width={110}
          height={45}
          className="MainLogo"
          onClick={() => Router.push(`/`)}
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
        .MainLogo:hover {
          cursor: pointer;
          transform: scale(1.05);
          transition: all 0.3s ease 0s;
        }
      `}</style>
    </>
  );
}

export default CustomHeader;
