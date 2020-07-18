import React from "react";

class ProfilePersonalPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  render() {
    return (
      <div>
        <div className="tabs-nav-pro">
          <ul className="row m-0 mb-4">
            <li className="col-sm active">
              <a href="javascript:;">Public</a>
            </li>
            <li className="col-sm">
              <a href="javascript:;">Private</a>
            </li>
            <li className="col-sm">
              <a href="javascript:;">Resume</a>
            </li>
          </ul>
        </div>
        <div className="pro-right-in">
          <div className="user-pro-inn">
            <figure>
              <img src="images/team-img1.jpg" />
            </figure>
            <h4>Jhone Watson</h4>
          </div>
          <div className="card">
            <div className="card-header">
              <h4>Education</h4>
            </div>
            <div className="card-body">
              <div className="education-details mb-4">
                <h4>High School</h4>
                <ul className="list-point">
                  <li>
                    <div className="list-left">
                      <label>School Name</label>
                    </div>
                    <div className="list-right">
                      <span>London school</span>
                    </div>
                  </li>
                  <li>
                    <div className="list-left">
                      <label>City</label>
                    </div>
                    <div className="list-right">
                      <span>City name</span>
                    </div>
                  </li>
                  <li>
                    <div className="list-left">
                      <label>State</label>
                    </div>
                    <div className="list-right">
                      <span>State name</span>
                    </div>
                  </li>
                  <li>
                    <div className="list-left">
                      <label>Country</label>
                    </div>
                    <div className="list-right">
                      <span>Country name</span>
                    </div>
                  </li>
                  <li>
                    <div className="list-left">
                      <label>From</label>
                    </div>
                    <div className="list-right">
                      <span>June 2020</span>
                    </div>
                  </li>
                  <li>
                    <div className="list-left">
                      <label>To</label>
                    </div>
                    <div className="list-right">
                      <span>June 2020</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="education-details mb-4">
                <h4>University</h4>
                <ul className="list-point">
                  <li>
                    <div className="list-left">
                      <label>University</label>
                    </div>
                    <div className="list-right">
                      <span>University name</span>
                    </div>
                  </li>
                  <li>
                    <div className="list-left">
                      <label>College</label>
                    </div>
                    <div className="list-right">
                      <span>College name</span>
                    </div>
                  </li>
                  <li>
                    <div className="list-left">
                      <label> Degree Status </label>
                    </div>
                    <div className="list-right">
                      <span> Degree Status name</span>
                    </div>
                  </li>
                  <li>
                    <div className="list-left">
                      <label>Degree</label>
                    </div>
                    <div className="list-right">
                      <span>Degree name</span>
                    </div>
                  </li>
                  <li>
                    <div className="list-left">
                      <label>From</label>
                    </div>
                    <div className="list-right">
                      <span>June 2020</span>
                    </div>
                  </li>
                  <li>
                    <div className="list-left">
                      <label>To</label>
                    </div>
                    <div className="list-right">
                      <span>June 2020</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="education-details mb-4">
                <h4>Field of Study</h4>
                <ul className="list-point">
                  <li>
                    <div className="list-left">
                      <label>Fields name</label>
                    </div>
                    <div className="list-right">
                      <span>Fields name</span>
                    </div>
                  </li>
                  <li>
                    <div className="list-left">
                      <label>Fields name</label>
                    </div>
                    <div className="list-right">
                      <span>Fields name</span>
                    </div>
                  </li>
                  <li>
                    <div className="list-left">
                      <label>Fields name</label>
                    </div>
                    <div className="list-right">
                      <span>Fields name</span>
                    </div>
                  </li>
                  <li>
                    <div className="list-left">
                      <label> Major GPA </label>
                    </div>
                    <div className="list-right">
                      <span>10 out of 10</span>
                    </div>
                  </li>
                  <li>
                    <div className="list-left">
                      <label> Cumulative GPA </label>
                    </div>
                    <div className="list-right">
                      <span> 10 out of 10</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="education-details mb-4">
                <h4>Honors</h4>
                <ul className="list-point">
                  <li>
                    <div className="list-left">
                      <label>Coursework</label>
                    </div>
                    <div className="list-right">
                      <span>Coursework name</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="education-details">
                <h4>Awards/ Accomplishment</h4>
                <ul className="list-point">
                  <li>
                    <div className="list-left">
                      <label>Name of Awards/ Accomplishment</label>
                    </div>
                    <div className="list-right">
                      <span>Name of Awards/ Accomplishment name</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfilePersonalPage;
