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
      <div className="pro-right-in">
        <div className="form-input-flex d-flex the-input-1">
          <div className="left-input-se">
            <div className="form-group">
              <label>User name</label>
              <input type="text" name="" className="form-control" />
            </div>
          </div>
          <div className="right-input-se">
            <div className="check-inline d-flex">
              <div className="check-inline-box text-center">
                <span>Public Profile</span>
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
                <span>Private profile </span>
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
                <span>Resume</span>
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
                <span>+ Odd resume</span>
              </div>
            </div>
          </div>
        </div>
        <div className="form-input-flex d-flex">
          <div className="left-input-se">
            <div className="form-group">
              <label>Middle name </label>
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
              <label>Last name </label>
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
              <label>Email </label>
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
              <label>Address </label>
              <textarea className="form-control"></textarea>
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
            <div className="row col-pd-7">
              <div className="col-md-4">
                <div className="form-group">
                  <label>Zip code </label>
                  <input type="text" name="" className="form-control" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label>City </label>
                  <input type="text" name="" className="form-control" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label>State </label>
                  <select className="form-control">
                    <option>Choose state</option>
                  </select>
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
              <label>Country </label>
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
              <label>Phone number </label>
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
            <button className="btn btn-purpal">Back</button>
            <button className="btn btn-green ml-auto">Next</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfilePersonalPage;
