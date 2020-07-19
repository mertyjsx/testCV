import React from "react";
import Navigation from "./_components/Navigation.page";
import { Footer } from "./_components/Footer.page";
import { register } from "./_services/user.service";

// Encrypt
const cipher = (salt) => {
  const textToChars = (text) => text.split("").map((c) => c.charCodeAt(0));
  const byteHex = (n) => ("0" + Number(n).toString(16)).substr(-2);
  const applySaltToChar = (code) =>
    textToChars(salt).reduce((a, b) => a ^ b, code);

  return (text) =>
    text.split("").map(textToChars).map(applySaltToChar).map(byteHex).join("");
};

// To create a cipher
const myCipher = cipher("mySecretSalt");

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      email: "",
      password: "",
      rePassword: "",
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
    this.setState({ loading: true });

    //Then cipher any text:
    let ciphertext = myCipher(this.state.email);

    register(this.state).then(
      (response) => {
        const { from } = {
          from: { pathname: "/verify/" + ciphertext },
        };

        if (response.success) {
          this.props.history.push(from);
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
      <div className="warper ">
        {/* <!--header-content-here--> */}
        <Navigation props={this.props} />
        {/* <!--header-content-end--> */}

        {/* <!--site-container-start--> */}
        <div className="site_content">
          <div className="heading-banner text-center">
            <div className="container">
              <h1>Create your account!</h1>
            </div>
          </div>
          <div className="login-form">
            <div className="container">
              <div className="login-form-box">
                <form method="post" onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      className="form-control"
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
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      name="rePassword"
                      placeholder="Verify password"
                      className="form-control"
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                  <button className="btn btn-purpal w-100" disabled={loading}>
                    {loading ? "Signup....." : "Signup"}
                  </button>
                  <div className="account-new-text text-center">
                    <span>
                      Already a user?{" "}
                      <a
                        href="javascript:void(0)"
                        onClick={() => this.props.history.push("login")}
                      >
                        Login
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

export default SignUp;
