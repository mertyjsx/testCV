import React from "react";
import Navigation from "./_components/Navigation.page";
import { Footer } from "./_components/Footer.page";
import { login } from "./_services/user.service";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      loading: false,
      error: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  // USING METHOD TO SUMBIT FORM DETAILS TO SERVER
  handleSubmit(e) {
    e.preventDefault();
    const { username, password } = this.state;

    // stop here if form is invalid
    if (!(username && password)) {
      return;
    }

    this.setState({ loading: true });
    login(username, password).then(
      (response) => {
        // IF GETTING RESPONSE TRUE THEN SHOULD BE LOGIN AND REDIRCT
        if (response.success) {
          this.props.history.push("/profile");
        } else {
          this.setState({ loading: false });
        }
      },
      (error) => this.setState({ error, loading: false })
    );
  }

  render() {
    const { username, password, loading, error } = this.state;
    return (
      <div className="warper ">
        {/* <!--header-content-here--> */}
        <Navigation props={this.props} />
        {/* <!--header-content-end--> */}

        {/* <!--site-container-start--> */}
        <div className="site_content">
          <div className="heading-banner text-center">
            <div className="container">
              <h1>Login to your account!</h1>
            </div>
          </div>
          <div className="login-form">
            <div className="container">
              <div className="login-form-box">
                <form method="post" onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      name="username"
                      placeholder="Your Email"
                      className="form-control"
                      value={username}
                      onChange={this.handleChange}
                      required
                      autoFocus
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="form-control"
                      autoComplete="new-password"
                      value={password}
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                  <div className="forgot-pass text-center mb-3">
                    <a href="javascript:void(0)">Forgot password?</a>
                  </div>
                  <button className="btn btn-purpal w-100" disabled={loading}>
                    {loading ? "Login....." : "Login"}
                  </button>
                  <div className="account-new-text text-center">
                    <span>
                      Don't have an account?{" "}
                      <a
                        href="javascript:void(0)"
                        onClick={() => this.props.history.push("sign-up")}
                      >
                        Signup
                      </a>
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* <!--site-container-end--> */}

        {/* <!--footer-here--> */}
        <Footer props={this.props} />
        {/* <!--footer-end--> */}
      </div>
    );
  }
}

export default Login;
