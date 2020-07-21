import React from "react";
import { Helmet } from "react-helmet";
// import { getToken, logout } from "../_services/user.service";

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
        <nav className="navbar">
          <a href="#" className="sidebar-toggler">
            <i data-feather="menu"></i>
          </a>
          <div className="navbar-content">
            <ul className="navbar-nav">
              <li className="nav-item dropdown nav-notifications">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="notificationDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i data-feather="bell"></i>
                  <div className="indicator">
                    <div className="circle"></div>
                  </div>
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="notificationDropdown"
                >
                  <div className="dropdown-header d-flex align-items-center justify-content-between">
                    <p className="mb-0 font-weight-medium">
                      6 New Notifications
                    </p>
                    <a href="javascript:;" className="text-muted">
                      Clear all
                    </a>
                  </div>
                  <div className="dropdown-body">
                    <a href="javascript:;" className="dropdown-item">
                      <div className="icon">
                        <i data-feather="user-plus"></i>
                      </div>
                      <div className="content">
                        <p>New customer registered</p>
                        <p className="sub-text text-muted">2 sec ago</p>
                      </div>
                    </a>
                    <a href="javascript:;" className="dropdown-item">
                      <div className="icon">
                        <i data-feather="gift"></i>
                      </div>
                      <div className="content">
                        <p>New Order Recieved</p>
                        <p className="sub-text text-muted">30 min ago</p>
                      </div>
                    </a>
                    <a href="javascript:;" className="dropdown-item">
                      <div className="icon">
                        <i data-feather="alert-circle"></i>
                      </div>
                      <div className="content">
                        <p>Server Limit Reached!</p>
                        <p className="sub-text text-muted">1 hrs ago</p>
                      </div>
                    </a>
                    <a href="javascript:;" className="dropdown-item">
                      <div className="icon">
                        <i data-feather="layers"></i>
                      </div>
                      <div className="content">
                        <p>Apps are ready for update</p>
                        <p className="sub-text text-muted">5 hrs ago</p>
                      </div>
                    </a>
                    <a href="javascript:;" className="dropdown-item">
                      <div className="icon">
                        <i data-feather="download"></i>
                      </div>
                      <div className="content">
                        <p>Download completed</p>
                        <p className="sub-text text-muted">6 hrs ago</p>
                      </div>
                    </a>
                  </div>
                  <div className="dropdown-footer d-flex align-items-center justify-content-center">
                    <a href="javascript:;">View all</a>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown nav-profile">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="profileDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img src="https://via.placeholder.com/30x30" alt="profile" />
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="profileDropdown"
                >
                  <div className="dropdown-header d-flex flex-column align-items-center">
                    <div className="figure mb-3">
                      <img src="https://via.placeholder.com/80x80" alt="" />
                    </div>
                    <div className="info text-center">
                      <p className="name font-weight-bold mb-0">
                        Kuldeep kumar
                      </p>
                      <p className="email text-muted mb-3">
                        kuldeepkuamr@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="dropdown-body">
                    <ul className="profile-nav p-0 pt-3">
                      <li className="nav-item">
                        <a href="javascript:;" className="nav-link">
                          <i data-feather="user"></i>
                          <span>Profile</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="javascript:;" className="nav-link">
                          <i data-feather="edit"></i>
                          <span>Edit Profile</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="javascript:;" className="nav-link">
                          <i data-feather="repeat"></i>
                          <span>Switch User</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="javascript:;" className="nav-link">
                          <i data-feather="log-out"></i>
                          <span>Log Out</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navigation;
