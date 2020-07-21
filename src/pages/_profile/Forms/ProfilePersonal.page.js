import React from "react";
import { personalProfileData } from "../../_services/profile.service";

class ProfilePersonalPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      first_name: "",
      middle_name: "",
      last_name: "",
      email: "",
      address: "",
      zip_code: "",
      city: "",
      state: "",
      country: "",
      phone_number: "",
      public: [],
      private: [],
      resume: [],
      error: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangePublic = this.handleChangePublic.bind(this);
    this.handleChangePrivate = this.handleChangePrivate.bind(this);
    this.handleChangeResume = this.handleChangeResume.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleChangePublic(e) {
    const { name, value } = e.target;
    let publicVar = [];

    
    
    
    // console.log("Public -- ", name, " == ", value);
    // this.setState({ [name]: value });
  }

  handleChangePrivate(e) {
    const { name, value } = e.target;
    console.log("Private -- ", name, " == ", value);
    // this.setState({ [name]: value });
  }

  handleChangeResume(e) {
    const { name, value } = e.target;
    console.log("Resume -- ", name, " == ", value);
    // this.setState({ [name]: value });
  }

  // USING METHOD TO SUMBIT FORM DETAILS TO SERVER
  handleSubmit(e) {
    e.preventDefault();
    this.setState({ loading: true });

    personalProfileData(this.state).then(
      (response) => {
        if (response.success) {
          this.props.profileThis.setState({ activeMenu: "Education" });
        } else {
          this.setState({ loading: false });
        }
      },
      (error) => this.setState({ error, loading: false })
    );
  }

  render() {
    const { loading, error } = this.state;
    return (
      <div className="pro-right-in">
        <form method="post" onSubmit={this.handleSubmit}>
          <div className="form-input-flex d-flex the-input-1">
            <div className="left-input-se">
              <div className="form-group">
                <label>First name</label>
                <input
                  type="text"
                  name="first_name"
                  className="form-control"
                  onChange={this.handleChange}
                  required
                  autoFocus
                />
              </div>
            </div>
            <div className="right-input-se">
              <div className="check-inline d-flex">
                <div className="check-inline-box text-center">
                  <span>Public Profile</span>
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      id="firstNameCheckedPublic"
                      name="first_name"
                      className="custom-control-input"
                      onChange={this.handleChangePublic}
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="firstNameCheckedPublic"
                    ></label>
                  </div>
                </div>
                <div className="check-inline-box text-center">
                  <span>Private profile </span>
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      id="firstNameCheckedPrivate"
                      name="first_name"
                      className="custom-control-input"
                      onChange={this.handleChangePrivate}
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="firstNameCheckedPrivate"
                    ></label>
                  </div>
                </div>
                <div className="check-inline-box text-center">
                  <span>Resume</span>
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      id="firstNameCheckedResume"
                      className="custom-control-input"
                      name="first_name"
                      onChange={this.handleChangeResume}
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="firstNameCheckedResume"
                    ></label>
                  </div>
                </div>
                <div className="check-inline-box text-center">
                  <span>+ Odd resume</span>
                </div>
              </div>
            </div>
          </div>
          <div className="form-input-flex d-flex">
            <div className="left-input-se">
              <div className="form-group">
                <label>Middle name </label>
                <input
                  type="text"
                  name="middle_name"
                  className="form-control"
                  onChange={this.handleChange}
                  required
                />
              </div>
            </div>
            <div className="right-input-se">
              <div className="check-inline d-flex">
                <div className="check-inline-box text-center">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="middleNameCheckedPublic"
                      name="middle_name"
                      onChange={this.handleChangePublic}
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="middleNameCheckedPublic"
                    ></label>
                  </div>
                </div>
                <div className="check-inline-box text-center">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="middleNameCheckedPrivate"
                      name="middle_name"
                      onChange={this.handleChangePrivate}
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="middleNameCheckedPrivate"
                    ></label>
                  </div>
                </div>
                <div className="check-inline-box text-center">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="middleNameCheckedResume"
                      name="middle_name"
                      onChange={this.handleChangeResume}
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="middleNameCheckedResume"
                    ></label>
                  </div>
                </div>
                <div className="check-inline-box text-center"></div>
              </div>
            </div>
          </div>
          <div className="form-input-flex d-flex">
            <div className="left-input-se">
              <div className="form-group">
                <label>Last name </label>
                <input
                  type="text"
                  name="last_name"
                  className="form-control"
                  onChange={this.handleChange}
                  required
                />
              </div>
            </div>
            <div className="right-input-se">
              <div className="check-inline d-flex">
                <div className="check-inline-box text-center">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="lastNameCheckedPublic"
                      name="last_name"
                      onChange={this.handleChangePublic}
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="lastNameCheckedPublic"
                    ></label>
                  </div>
                </div>
                <div className="check-inline-box text-center">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="lastNameCheckedPrivate"
                      name="last_name"
                      onChange={this.handleChangePrivate}
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="lastNameCheckedPrivate"
                    ></label>
                  </div>
                </div>
                <div className="check-inline-box text-center">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="lastNameCheckedResume"
                      name="last_name"
                      onChange={this.handleChangeResume}
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="lastNameCheckedResume"
                    ></label>
                  </div>
                </div>
                <div className="check-inline-box text-center"></div>
              </div>
            </div>
          </div>
          <div className="form-input-flex d-flex">
            <div className="left-input-se">
              <div className="form-group">
                <label>Email </label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  onChange={this.handleChange}
                  required
                />
              </div>
            </div>
            <div className="right-input-se">
              <div className="check-inline d-flex">
                <div className="check-inline-box text-center">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="emailCheckedPublic"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="emailCheckedPublic"
                    ></label>
                  </div>
                </div>
                <div className="check-inline-box text-center">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="emailCheckedPrivate"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="emailCheckedPrivate"
                    ></label>
                  </div>
                </div>
                <div className="check-inline-box text-center">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="emailCheckedResume"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="emailCheckedResume"
                    ></label>
                  </div>
                </div>
                <div className="check-inline-box text-center"></div>
              </div>
            </div>
          </div>
          <div className="form-input-flex d-flex">
            <div className="left-input-se">
              <div className="form-group">
                <label>Address </label>
                <textarea
                  className="form-control"
                  name="address"
                  onChange={this.handleChange}
                  required
                ></textarea>
              </div>
            </div>
            <div className="right-input-se">
              <div className="check-inline d-flex">
                <div className="check-inline-box text-center">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="addressCheckedPublic"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="addressCheckedPublic"
                    ></label>
                  </div>
                </div>
                <div className="check-inline-box text-center">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="addressCheckedPrivate"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="addressCheckedPrivate"
                    ></label>
                  </div>
                </div>
                <div className="check-inline-box text-center">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="addressCheckedResume"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="addressCheckedResume"
                    ></label>
                  </div>
                </div>
                <div className="check-inline-box text-center"></div>
              </div>
            </div>
          </div>
          <div className="form-input-flex d-flex">
            <div className="left-input-se">
              <div className="row col-pd-7">
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Zip code </label>
                    <input
                      type="text"
                      name="zip_code"
                      className="form-control"
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>City </label>
                    <input
                      type="text"
                      name="city"
                      className="form-control"
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>State </label>
                    <input
                      type="text"
                      name="state"
                      className="form-control"
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="right-input-se">
              <div className="check-inline d-flex">
                <div className="check-inline-box text-center">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="zcsCheckedPublic"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="zcsCheckedPublic"
                    ></label>
                  </div>
                </div>
                <div className="check-inline-box text-center">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="zcsCheckedPrivate"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="zcsCheckedPrivate"
                    ></label>
                  </div>
                </div>
                <div className="check-inline-box text-center">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="zcsCheckedResume"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="zcsCheckedResume"
                    ></label>
                  </div>
                </div>
                <div className="check-inline-box text-center"></div>
              </div>
            </div>
          </div>
          <div className="form-input-flex d-flex">
            <div className="left-input-se">
              <div className="form-group">
                <label>Country </label>
                <input
                  type="text"
                  name="country"
                  className="form-control"
                  onChange={this.handleChange}
                  required
                />
              </div>
            </div>
            <div className="right-input-se">
              <div className="check-inline d-flex">
                <div className="check-inline-box text-center">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="countryCheckedPublic"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="countryCheckedPublic"
                    ></label>
                  </div>
                </div>
                <div className="check-inline-box text-center">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="countryCheckedPrivate"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="countryCheckedPrivate"
                    ></label>
                  </div>
                </div>
                <div className="check-inline-box text-center">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="countryCheckedResume"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="countryCheckedResume"
                    ></label>
                  </div>
                </div>
                <div className="check-inline-box text-center"></div>
              </div>
            </div>
          </div>
          <div className="form-input-flex d-flex">
            <div className="left-input-se">
              <div className="form-group">
                <label>Phone number </label>
                <input
                  type="text"
                  name="phone_number"
                  className="form-control"
                  onChange={this.handleChange}
                  required
                />
              </div>
            </div>
            <div className="right-input-se">
              <div className="check-inline d-flex">
                <div className="check-inline-box text-center">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="phoneNumberCheckedPublic"
                      name="phone_number"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="phoneNumberCheckedPublic"
                    ></label>
                  </div>
                </div>
                <div className="check-inline-box text-center">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="phoneNumberCheckedPrivate"
                      name="phoneNumber_type[]"
                      value="private"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="phoneNumberCheckedPrivate"
                    ></label>
                  </div>
                </div>
                <div className="check-inline-box text-center">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="phoneNumberCheckedResume"
                      name="phoneNumber_type[]"
                      value="resume"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="phoneNumberCheckedResume"
                    ></label>
                  </div>
                </div>
                <div className="check-inline-box text-center"></div>
              </div>
            </div>
          </div>
          <div className="form-input-flex d-flex">
            <div className="left-input-se">
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "25%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
          <div className="form-input-flex d-flex">
            <div className="left-input-se d-flex mt-4">
              {/* <button className="btn btn-purpal">Back</button> */}
              <button className="btn btn-green ml-auto" disabled={loading}>
                {loading ? "Next....." : "Next"}
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default ProfilePersonalPage;
