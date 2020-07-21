import React from "react";
import { getToken, logout } from "../_services/user.service";
import { Helmet } from "react-helmet";

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }
  render() {
    return (
      <div>
        <Helmet>
          <link
            href={process.env.PUBLIC_URL + "/css/bootstrap.min.css"}
            rel="stylesheet"
          />
          <link
            href={process.env.PUBLIC_URL + "/css/fontawesome.min.css"}
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href={process.env.PUBLIC_URL + "/css/owl.carousel.min.css"}
            media="screen"
          />
          <link
            rel="stylesheet"
            href={process.env.PUBLIC_URL + "/css/style.css"}
            rel="stylesheet"
          />
        </Helmet>
        <header>
          <div className="container">
            <nav className="navbar navbar-expand-lg">
              <a
                className="navbar-brand"
                href="javascript:;"
                onClick={() => this.props.props.history.push("/")}
              >
                <img src={process.env.PUBLIC_URL + "/images/logo.svg"} />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="javascript:;">
                      Resources
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="javascript:;">
                      Need Help? (866) 215-9048
                    </a>
                  </li>
                </ul>

                {getToken() ? (
                  <div className="ml-0 header-profile">
                    <div className="dropdown">
                      <div
                        className="dropdown-toggle"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <img src="images/team-img1.jpg" />
                      </div>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <a
                          className="dropdown-item"
                          href="javascript:;"
                          onClick={() =>
                            this.props.props.history.push("/profile")
                          }
                        >
                          Profile
                        </a>
                        <a className="dropdown-item" href="#">
                          Change Password
                        </a>
                        <a
                          className="dropdown-item"
                          href="javascript:;"
                          onClick={() => {
                            logout();
                            this.props.props.history.push("/login");
                          }}
                        >
                          Logout
                        </a>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="ml-0 header-btns">
                    <a
                      href="javascript:;"
                      className="btn btn-purpal"
                      onClick={() => this.props.props.history.push("/login")}
                    >
                      Login
                    </a>
                    <a
                      href="javascript:;"
                      className="btn btn-green"
                      onClick={() => this.props.props.history.push("/sign-up")}
                    >
                      Signup
                    </a>
                  </div>
                )}
              </div>
            </nav>
          </div>
        </header>
      </div>
    );
  }
}

export default Navigation;
