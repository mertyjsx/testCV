import React from "react";
import { Helmet } from "react-helmet";

export const Footer = (props) => {
  return (
    <div>
      <Helmet>
        {/* <script
          src={process.env.PUBLIC_URL + "/js/jquery.min.js"}
          type="text/javascript"
        ></script>
        <script
          src={process.env.PUBLIC_URL + "/js/bootstrap.min.js"}
          type="text/javascript"
        ></script>
        <script
          type="text/javascript"
          src={process.env.PUBLIC_URL + "/js/owl.carousel.min.js"}
        ></script>
        <script
          src="https://kit.fontawesome.com/184e8709aa.js"
          crossorigin="anonymous"
        ></script> */}
      </Helmet>
      <footer>Copyright © 2020 Smart Form. All rights reserved.</footer>
    </div>
  );
};
