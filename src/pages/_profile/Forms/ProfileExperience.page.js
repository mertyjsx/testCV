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
      <div className="pro-right-in">
        {/* <!-- check box --> */}
        <div className="check-inline d-flex check-inline-fix">
          <div className="check-inline-box text-center">
            <span>Public Profile</span>
          </div>
          <div className="check-inline-box text-center">
            <span>Private profile </span>
          </div>
          <div className="check-inline-box text-center">
            <span>Resume</span>
          </div>
        </div>
        <div className="box-seprat">
          <h4>Employment</h4>
          <div className="form-input-flex d-flex">
            <div className="left-input-se">
              <div className="form-group">
                <label>Do you have any work experience?”</label>
                <div className="d-flex">
                  <div className="custom-control custom-radio mr-4">
                    <input
                      type="radio"
                      className="custom-control-input"
                      id="defaultUnchecked"
                    />
                    <label
                      className="custom-control-label"
                      for="defaultUnchecked"
                    >
                      Yes
                    </label>
                  </div>
                  <div className="custom-control custom-radio mr-4">
                    <input
                      type="radio"
                      className="custom-control-input"
                      id="defaultUnchecked"
                    />
                    <label
                      className="custom-control-label"
                      for="defaultUnchecked"
                    >
                      No
                    </label>
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
                      id="defaultUnchecked"
                    />
                    <label
                      className="custom-control-label"
                      for="defaultUnchecked"
                    ></label>
                  </div>
                </div>
                <div className="check-inline-box text-center">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="defaultUnchecked"
                    />
                    <label
                      className="custom-control-label"
                      for="defaultUnchecked"
                    ></label>
                  </div>
                </div>
                <div className="check-inline-box text-center">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="defaultUnchecked"
                    />
                    <label
                      className="custom-control-label"
                      for="defaultUnchecked"
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
                <label>Employer Name</label>
                <input type="text" name="" className="form-control" />
              </div>
            </div>
            <div className="right-input-se">
              <div className="check-inline d-flex">
                <div className="check-inline-box text-center">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="defaultUnchecked"
                    />
                    <label
                      className="custom-control-label"
                      for="defaultUnchecked"
                    ></label>
                  </div>
                </div>
                <div className="check-inline-box text-center">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="defaultUnchecked"
                    />
                    <label
                      className="custom-control-label"
                      for="defaultUnchecked"
                    ></label>
                  </div>
                </div>
                <div className="check-inline-box text-center">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="defaultUnchecked"
                    />
                    <label
                      className="custom-control-label"
                      for="defaultUnchecked"
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
                <label>Job Title</label>
                <input type="text" name="" className="form-control" />
              </div>
            </div>
            <div className="right-input-se">
              <div className="check-inline d-flex">
                <div className="check-inline-box text-center">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="defaultUnchecked"
                    />
                    <label
                      className="custom-control-label"
                      for="defaultUnchecked"
                    ></label>
                  </div>
                </div>
                <div className="check-inline-box text-center">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="defaultUnchecked"
                    />
                    <label
                      className="custom-control-label"
                      for="defaultUnchecked"
                    ></label>
                  </div>
                </div>
                <div className="check-inline-box text-center">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="defaultUnchecked"
                    />
                    <label
                      className="custom-control-label"
                      for="defaultUnchecked"
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
                <label>Job Level </label>
                <input type="text" name="" className="form-control" />
              </div>
            </div>
            <div className="right-input-se">
              <div className="check-inline d-flex">
                <div className="check-inline-box text-center">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="defaultUnchecked"
                    />
                    <label
                      className="custom-control-label"
                      for="defaultUnchecked"
                    ></label>
                  </div>
                </div>
                <div className="check-inline-box text-center">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="defaultUnchecked"
                    />
                    <label
                      className="custom-control-label"
                      for="defaultUnchecked"
                    ></label>
                  </div>
                </div>
                <div className="check-inline-box text-center">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="defaultUnchecked"
                    />
                    <label
                      className="custom-control-label"
                      for="defaultUnchecked"
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
                <label>Organization </label>
                <input type="text" name="" className="form-control" />
              </div>
            </div>
            <div className="right-input-se">
              <div className="check-inline d-flex">
                <div className="check-inline-box text-center">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="defaultUnchecked"
                    />
                    <label
                      className="custom-control-label"
                      for="defaultUnchecked"
                    ></label>
                  </div>
                </div>
                <div className="check-inline-box text-center">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="defaultUnchecked"
                    />
                    <label
                      className="custom-control-label"
                      for="defaultUnchecked"
                    ></label>
                  </div>
                </div>
                <div className="check-inline-box text-center">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="defaultUnchecked"
                    />
                    <label
                      className="custom-control-label"
                      for="defaultUnchecked"
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
                <label>Team Name </label>
                <input type="text" name="" className="form-control" />
              </div>
            </div>
            <div className="right-input-se">
              <div className="check-inline d-flex">
                <div className="check-inline-box text-center">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="defaultUnchecked"
                    />
                    <label
                      className="custom-control-label"
                      for="defaultUnchecked"
                    ></label>
                  </div>
                </div>
                <div className="check-inline-box text-center">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="defaultUnchecked"
                    />
                    <label
                      className="custom-control-label"
                      for="defaultUnchecked"
                    ></label>
                  </div>
                </div>
                <div className="check-inline-box text-center">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="defaultUnchecked"
                    />
                    <label
                      className="custom-control-label"
                      for="defaultUnchecked"
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
                <label>Job Details </label>
                <input type="text" name="" className="form-control" />
              </div>
            </div>
            <div className="right-input-se">
              <div className="check-inline d-flex">
                <div className="check-inline-box text-center">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="defaultUnchecked"
                    />
                    <label
                      className="custom-control-label"
                      for="defaultUnchecked"
                    ></label>
                  </div>
                </div>
                <div className="check-inline-box text-center">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="defaultUnchecked"
                    />
                    <label
                      className="custom-control-label"
                      for="defaultUnchecked"
                    ></label>
                  </div>
                </div>
                <div className="check-inline-box text-center">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="defaultUnchecked"
                    />
                    <label
                      className="custom-control-label"
                      for="defaultUnchecked"
                    ></label>
                  </div>
                </div>
                <div className="check-inline-box text-center"></div>
              </div>
            </div>
          </div>
          <div className="form-input-flex d-flex">
            <div className="left-input-se">
              <label>Employment From </label>
              <div className="row form-group">
                <div className="col-md-6">
                  <input
                    type="text"
                    name=""
                    placeholder="month"
                    className="form-control"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    name=""
                    placeholder="year"
                    className="form-control"
                  />
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
                      id="defaultUnchecked"
                    />
                    <label
                      className="custom-control-label"
                      for="defaultUnchecked"
                    ></label>
                  </div>
                </div>
                <div className="check-inline-box text-center">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="defaultUnchecked"
                    />
                    <label
                      className="custom-control-label"
                      for="defaultUnchecked"
                    ></label>
                  </div>
                </div>
                <div className="check-inline-box text-center">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="defaultUnchecked"
                    />
                    <label
                      className="custom-control-label"
                      for="defaultUnchecked"
                    ></label>
                  </div>
                </div>
                <div className="check-inline-box text-center"></div>
              </div>
            </div>
          </div>
          <div className="form-input-flex d-flex">
            <div className="left-input-se">
              <label>Employment To </label>
              <div className="row form-group">
                <div className="col-md-6">
                  <input
                    type="text"
                    name=""
                    placeholder="month"
                    className="form-control"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    name=""
                    placeholder="year"
                    className="form-control"
                  />
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
                      id="defaultUnchecked"
                    />
                    <label
                      className="custom-control-label"
                      for="defaultUnchecked"
                    ></label>
                  </div>
                </div>
                <div className="check-inline-box text-center">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="defaultUnchecked"
                    />
                    <label
                      className="custom-control-label"
                      for="defaultUnchecked"
                    ></label>
                  </div>
                </div>
                <div className="check-inline-box text-center">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="defaultUnchecked"
                    />
                    <label
                      className="custom-control-label"
                      for="defaultUnchecked"
                    ></label>
                  </div>
                </div>
                <div className="check-inline-box text-center"></div>
              </div>
            </div>
          </div>
          <a href="javascript:;">+ Add another employer</a>
        </div>
        <div className="form-input-flex d-flex">
          <div className="left-input-se d-flex mt-4">
            <button className="btn btn-purpal">Back</button>
            <button className="btn btn-green ml-auto">Next</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileExperiencePage;
