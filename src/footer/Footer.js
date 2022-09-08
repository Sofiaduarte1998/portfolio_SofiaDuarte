import React from "react";
import g from "./g.png";
import l from "./l.png";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="conatiner text-center top">
          <div className="box box_shodow">
            <div className="now">
              <div className="ft">
                <a href="https://www.linkedin.com/in/sofia-duarte-865150146/">
                  <img src={l} alt="l" />
                </a>
              </div>
              <div className="ft">
                <a href="https://github.com/Sofiaduarte1998">
                  <img src={g} alt="g" />
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
