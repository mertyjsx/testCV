import React from "react";

class ProfileExperiencePage extends React.Component {
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
              <h4>Employment</h4>
            </div>
            <div className="card-body">
              <div className="education-details mb-4">
                <h4>High School</h4>
                <ul className="list-point">
                  <li>
                    <div className="list-left">
                      <label> Do you have any work experience?” </label>
                    </div>
                    <div className="list-right">
                      <span>Yes</span>
                    </div>
                  </li>
                  <li>
                    <div className="list-left">
                      <label>Employer Name</label>
                    </div>
                    <div className="list-right">
                      <span>Employer Name</span>
                    </div>
                  </li>
                  <li>
                    <div className="list-left">
                      <label>Job Title</label>
                    </div>
                    <div className="list-right">
                      <span>Job name</span>
                    </div>
                  </li>
                  <li>
                    <div className="list-left">
                      <label>Job Level</label>
                    </div>
                    <div className="list-right">
                      <span>Job name</span>
                    </div>
                  </li>
                  <li>
                    <div className="list-left">
                      <label>Team Name</label>
                    </div>
                    <div className="list-right">
                      <span>Team Name</span>
                    </div>
                  </li>
                  <li>
                    <div className="list-left">
                      <label>Job Details </label>
                    </div>
                    <div className="list-right">
                      <span>Job Details Job Details Job Details </span>
                    </div>
                  </li>
                  <li>
                    <div className="list-left">
                      <label>Employment From </label>
                    </div>
                    <div className="list-right">
                      <span>June 2020 </span>
                    </div>
                  </li>
                  <li>
                    <div className="list-left">
                      <label>Employment To </label>
                    </div>
                    <div className="list-right">
                      <span>June 2020 </span>
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

export default ProfileExperiencePage;
