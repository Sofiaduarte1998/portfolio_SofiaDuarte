import React from "react";
import g from "./g.png";
import l from "./l.png";
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="conatiner text-center top">
          <div className="box box_shodow">
            <div className="details">
              <div className="size link" align="center">
                <a
                  href="https://www.linkedin.com/in/sofia-duarte-865150146/"
                  className="foter-a"
                >
                  <img className="img-f" src={l} alt="l" />
                </a>
              </div>
              <div className="size git" align="center">
                <a
                  href="https://github.com/Sofiaduarte1998"
                  className="foter-b"
                >
                  <img className="img-f" src={g} alt="g" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
