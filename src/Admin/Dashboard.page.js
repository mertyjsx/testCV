import React from "react";
import Navigation from "./_components/Navigation.page";
import Sidebar from "./_components/Sidebar.page";
import { Footer } from "./_components/Footer.page";
import { Helmet } from "react-helmet";
// import { getToken } from "./_services/user.service";

const $ = window.$;

class AdminDashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  // USING BELOW METHOD TO CALL BEFORE RENDER HTML CODE ON WEB
  componentDidMount() {
    $(window).scroll(function () {
      var body = $("body"),
        scroll = $(window).scrollTop();

      if (scroll >= 50) body.addClass("fixed");
      else body.removeClass("fixed");
    });
  }

  render() {
    return (
      <div>
        <Helmet>
          {/* <!-- core:css --> */}
          <link
            rel="stylesheet"
            href={
              process.env.PUBLIC_URL + "/admin-assets/vendors/core/core.css"
            }
          />
          {/* <!-- endinject --> */}
          {/* <!-- plugin css for this page --> */}
          <link
            rel="stylesheet"
            href={
              process.env.PUBLIC_URL +
              "/admin-assets/vendors/bootstrap-datepicker/bootstrap-datepicker.min.css"
            }
          />
          {/* <!-- end plugin css for this page --> */}
          {/* <!-- inject:css --> */}
          <link
            rel="stylesheet"
            href={
              process.env.PUBLIC_URL +
              "/admin-assets/fonts/feather-font/css/iconfont.css"
            }
          />
          <link
            rel="stylesheet"
            href={
              process.env.PUBLIC_URL +
              "/admin-assets/vendors/flag-icon-css/css/flag-icon.min.css"
            }
          />
          {/* <!-- endinject --> */}
          {/* <!-- Layout styles -->   */}
          <link
            rel="stylesheet"
            href={process.env.PUBLIC_URL + "/admin-assets/css/style.css"}
          />
          {/* <!-- End layout styles --> */}
        </Helmet>

        <div className="main-wrapper">
          {/* <!--Sidebar--> */}
          <Sidebar props={this.props} />
          {/* <!--Sidebar--> */}

          {/* <!--site-container-start--> */}
          <div className="page-wrapper">
            {/* <!-- partial:partials/_navbar.html --> */}
            <Navigation props={this.props} />
            {/* <!-- partial --> */}

            <div className="page-content">
              <div className="d-flex justify-content-between align-items-center flex-wrap grid-margin">
                <div>
                  <h4 className="mb-3 mb-md-0">Welcome to Dashboard</h4>
                </div>
              </div>

              <div className="row">
                <div className="col-12 col-xl-12 stretch-card">
                  <div className="row flex-grow">
                    <div className="col-md-4 grid-margin stretch-card">
                      <div className="card">
                        <div className="card-body">
                          <div className="d-flex justify-content-between align-items-baseline">
                            <h6 className="card-title mb-0">New Customers</h6>
                            <div className="dropdown mb-2">
                              <button
                                className="btn p-0"
                                type="button"
                                id="dropdownMenuButton"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <i
                                  className="icon-lg text-muted pb-3px"
                                  data-feather="more-horizontal"
                                ></i>
                              </button>
                              <div
                                className="dropdown-menu"
                                aria-labelledby="dropdownMenuButton"
                              >
                                <a
                                  className="dropdown-item d-flex align-items-center"
                                  href="#"
                                >
                                  <i
                                    data-feather="eye"
                                    className="icon-sm mr-2"
                                  ></i>{" "}
                                  <span className="">View</span>
                                </a>
                                <a
                                  className="dropdown-item d-flex align-items-center"
                                  href="#"
                                >
                                  <i
                                    data-feather="edit-2"
                                    className="icon-sm mr-2"
                                  ></i>{" "}
                                  <span className="">Edit</span>
                                </a>
                                <a
                                  className="dropdown-item d-flex align-items-center"
                                  href="#"
                                >
                                  <i
                                    data-feather="trash"
                                    className="icon-sm mr-2"
                                  ></i>{" "}
                                  <span className="">Delete</span>
                                </a>
                                <a
                                  className="dropdown-item d-flex align-items-center"
                                  href="#"
                                >
                                  <i
                                    data-feather="printer"
                                    className="icon-sm mr-2"
                                  ></i>{" "}
                                  <span className="">Print</span>
                                </a>
                                <a
                                  className="dropdown-item d-flex align-items-center"
                                  href="#"
                                >
                                  <i
                                    data-feather="download"
                                    className="icon-sm mr-2"
                                  ></i>{" "}
                                  <span className="">Download</span>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-6 col-md-12 col-xl-5">
                              <h3 className="mb-2">3,897</h3>
                              <div className="d-flex align-items-baseline">
                                <p className="text-success">
                                  <span>+3.3%</span>
                                  <i
                                    data-feather="arrow-up"
                                    className="icon-sm mb-1"
                                  ></i>
                                </p>
                              </div>
                            </div>
                            <div className="col-6 col-md-12 col-xl-7">
                              <div
                                id="apexChart1"
                                className="mt-md-3 mt-xl-0"
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 grid-margin stretch-card">
                      <div className="card">
                        <div className="card-body">
                          <div className="d-flex justify-content-between align-items-baseline">
                            <h6 className="card-title mb-0">New Orders</h6>
                            <div className="dropdown mb-2">
                              <button
                                className="btn p-0"
                                type="button"
                                id="dropdownMenuButton1"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <i
                                  className="icon-lg text-muted pb-3px"
                                  data-feather="more-horizontal"
                                ></i>
                              </button>
                              <div
                                className="dropdown-menu"
                                aria-labelledby="dropdownMenuButton1"
                              >
                                <a
                                  className="dropdown-item d-flex align-items-center"
                                  href="#"
                                >
                                  <i
                                    data-feather="eye"
                                    className="icon-sm mr-2"
                                  ></i>{" "}
                                  <span className="">View</span>
                                </a>
                                <a
                                  className="dropdown-item d-flex align-items-center"
                                  href="#"
                                >
                                  <i
                                    data-feather="edit-2"
                                    className="icon-sm mr-2"
                                  ></i>{" "}
                                  <span className="">Edit</span>
                                </a>
                                <a
                                  className="dropdown-item d-flex align-items-center"
                                  href="#"
                                >
                                  <i
                                    data-feather="trash"
                                    className="icon-sm mr-2"
                                  ></i>{" "}
                                  <span className="">Delete</span>
                                </a>
                                <a
                                  className="dropdown-item d-flex align-items-center"
                                  href="#"
                                >
                                  <i
                                    data-feather="printer"
                                    className="icon-sm mr-2"
                                  ></i>{" "}
                                  <span className="">Print</span>
                                </a>
                                <a
                                  className="dropdown-item d-flex align-items-center"
                                  href="#"
                                >
                                  <i
                                    data-feather="download"
                                    className="icon-sm mr-2"
                                  ></i>{" "}
                                  <span className="">Download</span>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-6 col-md-12 col-xl-5">
                              <h3 className="mb-2">35,084</h3>
                              <div className="d-flex align-items-baseline">
                                <p className="text-danger">
                                  <span>-2.8%</span>
                                  <i
                                    data-feather="arrow-down"
                                    className="icon-sm mb-1"
                                  ></i>
                                </p>
                              </div>
                            </div>
                            <div className="col-6 col-md-12 col-xl-7">
                              <div
                                id="apexChart2"
                                className="mt-md-3 mt-xl-0"
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 grid-margin stretch-card">
                      <div className="card">
                        <div className="card-body">
                          <div className="d-flex justify-content-between align-items-baseline">
                            <h6 className="card-title mb-0">Growth</h6>
                            <div className="dropdown mb-2">
                              <button
                                className="btn p-0"
                                type="button"
                                id="dropdownMenuButton2"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <i
                                  className="icon-lg text-muted pb-3px"
                                  data-feather="more-horizontal"
                                ></i>
                              </button>
                              <div
                                className="dropdown-menu"
                                aria-labelledby="dropdownMenuButton2"
                              >
                                <a
                                  className="dropdown-item d-flex align-items-center"
                                  href="#"
                                >
                                  <i
                                    data-feather="eye"
                                    className="icon-sm mr-2"
                                  ></i>{" "}
                                  <span className="">View</span>
                                </a>
                                <a
                                  className="dropdown-item d-flex align-items-center"
                                  href="#"
                                >
                                  <i
                                    data-feather="edit-2"
                                    className="icon-sm mr-2"
                                  ></i>{" "}
                                  <span className="">Edit</span>
                                </a>
                                <a
                                  className="dropdown-item d-flex align-items-center"
                                  href="#"
                                >
                                  <i
                                    data-feather="trash"
                                    className="icon-sm mr-2"
                                  ></i>{" "}
                                  <span className="">Delete</span>
                                </a>
                                <a
                                  className="dropdown-item d-flex align-items-center"
                                  href="#"
                                >
                                  <i
                                    data-feather="printer"
                                    className="icon-sm mr-2"
                                  ></i>{" "}
                                  <span className="">Print</span>
                                </a>
                                <a
                                  className="dropdown-item d-flex align-items-center"
                                  href="#"
                                >
                                  <i
                                    data-feather="download"
                                    className="icon-sm mr-2"
                                  ></i>{" "}
                                  <span className="">Download</span>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-6 col-md-12 col-xl-5">
                              <h3 className="mb-2">89.87%</h3>
                              <div className="d-flex align-items-baseline">
                                <p className="text-success">
                                  <span>+2.8%</span>
                                  <i
                                    data-feather="arrow-up"
                                    className="icon-sm mb-1"
                                  ></i>
                                </p>
                              </div>
                            </div>
                            <div className="col-6 col-md-12 col-xl-7">
                              <div
                                id="apexChart3"
                                className="mt-md-3 mt-xl-0"
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- row --> */}

              <div className="row">
                <div className="col-12 col-xl-12 grid-margin stretch-card">
                  <div className="card overflow-hidden">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-baseline mb-4 mb-md-3">
                        <h6 className="card-title mb-0">Revenue</h6>
                        <div className="dropdown">
                          <button
                            className="btn p-0"
                            type="button"
                            id="dropdownMenuButton3"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i
                              className="icon-lg text-muted pb-3px"
                              data-feather="more-horizontal"
                            ></i>
                          </button>
                          <div
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenuButton3"
                          >
                            <a
                              className="dropdown-item d-flex align-items-center"
                              href="#"
                            >
                              <i
                                data-feather="eye"
                                className="icon-sm mr-2"
                              ></i>{" "}
                              <span className="">View</span>
                            </a>
                            <a
                              className="dropdown-item d-flex align-items-center"
                              href="#"
                            >
                              <i
                                data-feather="edit-2"
                                className="icon-sm mr-2"
                              ></i>{" "}
                              <span className="">Edit</span>
                            </a>
                            <a
                              className="dropdown-item d-flex align-items-center"
                              href="#"
                            >
                              <i
                                data-feather="trash"
                                className="icon-sm mr-2"
                              ></i>{" "}
                              <span className="">Delete</span>
                            </a>
                            <a
                              className="dropdown-item d-flex align-items-center"
                              href="#"
                            >
                              <i
                                data-feather="printer"
                                className="icon-sm mr-2"
                              ></i>{" "}
                              <span className="">Print</span>
                            </a>
                            <a
                              className="dropdown-item d-flex align-items-center"
                              href="#"
                            >
                              <i
                                data-feather="download"
                                className="icon-sm mr-2"
                              ></i>{" "}
                              <span className="">Download</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="row align-items-start mb-2">
                        <div className="col-md-7">
                          <p className="text-muted tx-13 mb-3 mb-md-0">
                            Revenue is the income that a business has from its
                            normal business activities, usually from the sale of
                            goods and services to customers.
                          </p>
                        </div>
                        <div className="col-md-5 d-flex justify-content-md-end">
                          <div
                            className="btn-group mb-3 mb-md-0"
                            role="group"
                            aria-label="Basic example"
                          >
                            <button
                              type="button"
                              className="btn btn-outline-primary"
                            >
                              Today
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-primary d-none d-md-block"
                            >
                              Week
                            </button>
                            <button type="button" className="btn btn-primary">
                              Month
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-primary"
                            >
                              Year
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="flot-wrapper">
                        <div id="flotChart1" className="flot-chart"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- row --> */}

              <div className="row">
                <div className="col-lg-7 col-xl-8 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-baseline mb-2">
                        <h6 className="card-title mb-0">Monthly sales</h6>
                        <div className="dropdown mb-2">
                          <button
                            className="btn p-0"
                            type="button"
                            id="dropdownMenuButton4"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i
                              className="icon-lg text-muted pb-3px"
                              data-feather="more-horizontal"
                            ></i>
                          </button>
                          <div
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenuButton4"
                          >
                            <a
                              className="dropdown-item d-flex align-items-center"
                              href="#"
                            >
                              <i
                                data-feather="eye"
                                className="icon-sm mr-2"
                              ></i>{" "}
                              <span className="">View</span>
                            </a>
                            <a
                              className="dropdown-item d-flex align-items-center"
                              href="#"
                            >
                              <i
                                data-feather="edit-2"
                                className="icon-sm mr-2"
                              ></i>{" "}
                              <span className="">Edit</span>
                            </a>
                            <a
                              className="dropdown-item d-flex align-items-center"
                              href="#"
                            >
                              <i
                                data-feather="trash"
                                className="icon-sm mr-2"
                              ></i>{" "}
                              <span className="">Delete</span>
                            </a>
                            <a
                              className="dropdown-item d-flex align-items-center"
                              href="#"
                            >
                              <i
                                data-feather="printer"
                                className="icon-sm mr-2"
                              ></i>{" "}
                              <span className="">Print</span>
                            </a>
                            <a
                              className="dropdown-item d-flex align-items-center"
                              href="#"
                            >
                              <i
                                data-feather="download"
                                className="icon-sm mr-2"
                              ></i>{" "}
                              <span className="">Download</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <p className="text-muted mb-4">
                        Sales are activities related to selling or the number of
                        goods or services sold in a given time period.
                      </p>
                      <div className="monthly-sales-chart-wrapper">
                        <canvas id="monthly-sales-chart"></canvas>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-xl-4 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-baseline mb-2">
                        <h6 className="card-title mb-0">Cloud storage</h6>
                        <div className="dropdown mb-2">
                          <button
                            className="btn p-0"
                            type="button"
                            id="dropdownMenuButton5"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i
                              className="icon-lg text-muted pb-3px"
                              data-feather="more-horizontal"
                            ></i>
                          </button>
                          <div
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenuButton5"
                          >
                            <a
                              className="dropdown-item d-flex align-items-center"
                              href="#"
                            >
                              <i
                                data-feather="eye"
                                className="icon-sm mr-2"
                              ></i>{" "}
                              <span className="">View</span>
                            </a>
                            <a
                              className="dropdown-item d-flex align-items-center"
                              href="#"
                            >
                              <i
                                data-feather="edit-2"
                                className="icon-sm mr-2"
                              ></i>{" "}
                              <span className="">Edit</span>
                            </a>
                            <a
                              className="dropdown-item d-flex align-items-center"
                              href="#"
                            >
                              <i
                                data-feather="trash"
                                className="icon-sm mr-2"
                              ></i>{" "}
                              <span className="">Delete</span>
                            </a>
                            <a
                              className="dropdown-item d-flex align-items-center"
                              href="#"
                            >
                              <i
                                data-feather="printer"
                                className="icon-sm mr-2"
                              ></i>{" "}
                              <span className="">Print</span>
                            </a>
                            <a
                              className="dropdown-item d-flex align-items-center"
                              href="#"
                            >
                              <i
                                data-feather="download"
                                className="icon-sm mr-2"
                              ></i>{" "}
                              <span className="">Download</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div id="progressbar1" className="mx-auto"></div>
                      <div className="row mt-4 mb-3">
                        <div className="col-6 d-flex justify-content-end">
                          <div>
                            <label className="d-flex align-items-center justify-content-end tx-10 text-uppercase font-weight-medium">
                              Total storage{" "}
                              <span className="p-1 ml-1 rounded-circle bg-primary-muted"></span>
                            </label>
                            <h5 className="font-weight-bold mb-0 text-right">
                              8TB
                            </h5>
                          </div>
                        </div>
                        <div className="col-6">
                          <div>
                            <label className="d-flex align-items-center tx-10 text-uppercase font-weight-medium">
                              <span className="p-1 mr-1 rounded-circle bg-primary"></span>{" "}
                              Used storage
                            </label>
                            <h5 className="font-weight-bold mb-0">6TB</h5>
                          </div>
                        </div>
                      </div>
                      <button className="btn btn-primary btn-block">
                        Upgrade storage
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- row --> */}
            </div>

            {/* <!-- partial:partials/_footer.html --> */}
            <Footer props={this.props} />
            {/* <!-- partial --> */}
          </div>

          {/* <!--site-container-end--> */}
        </div>
        
        <Helmet>
          {/* <!-- core:js --> */}
          <script
            src={process.env.PUBLIC_URL + "/admin-assets/vendors/core/core.js"}
          ></script>
          {/* <!-- endinject --> */}
          {/* <!-- plugin js for this page --> */}
          <script
            src={
              process.env.PUBLIC_URL +
              "/admin-assets/vendors/chartjs/Chart.min.js"
            }
          ></script>
          <script
            src={
              process.env.PUBLIC_URL +
              "/admin-assets/vendors/jquery.flot/jquery.flot.js"
            }
          ></script>
          <script
            src={
              process.env.PUBLIC_URL +
              "/admin-assets/vendors/jquery.flot/jquery.flot.resize.js"
            }
          ></script>
          <script
            src={
              process.env.PUBLIC_URL +
              "/admin-assets/vendors/bootstrap-datepicker/bootstrap-datepicker.min.js"
            }
          ></script>
          <script
            src={
              process.env.PUBLIC_URL +
              "/admin-assets/vendors/apexcharts/apexcharts.min.js"
            }
          ></script>
          <script
            src={
              process.env.PUBLIC_URL +
              "/admin-assets/vendors/progressbar.js/progressbar.min.js"
            }
          ></script>
          {/* <!-- end plugin js for this page --> */}
          {/* <!-- inject:js --> */}
          <script
            src={
              process.env.PUBLIC_URL +
              "/admin-assets/vendors/feather-icons/feather.min.js"
            }
          ></script>
          <script
            src={process.env.PUBLIC_URL + "/admin-assets/js/template.js"}
          ></script>
          {/* <!-- endinject --> */}
          {/* <!-- custom js for this page --> */}
          <script
            src={process.env.PUBLIC_URL + "/admin-assets/js/dashboard.js"}
          ></script>
          <script
            src={process.env.PUBLIC_URL + "/admin-assets/js/datepicker.js"}
          ></script>
          {/* <!-- end custom js for this page --> */}
        </Helmet>
      </div>
    );
  }
}

export default AdminDashboard;
