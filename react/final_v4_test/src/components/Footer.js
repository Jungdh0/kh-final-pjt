import React from "react";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="row add_bottom_25">
            <div className="col-md-6">
              <ul className="footer-selector clearfix">
                <li>
                  <div className="styled-select lang-selector">
                    <select>
                      <option defaultValue="Korean">Korean</option>
                      <option value="English">English</option>
                    </select>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul className="additional_links">
                <li>
                  <a href="#0">Terms and conditions</a>
                </li>
                <li>© 2022 PopCon</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      {/*/footer*/}

      <div id="toTop"></div>
      {/*Back to top button*/}

      {/*COMMON SCRIPTS*/}
      <script src="js/common_scripts.min.js"></script>
      <script src="js/bootstrap.bundle.min.js"></script>
      <script src="js/common_func.js"></script>
    </div>
  );
};

export default Footer;
