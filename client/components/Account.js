import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Account extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    //   console.log(this.props.auth)
    //   const { auth } = this.props
    return (
      <section className="account-container">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

        <div className="card account">
          <div className="card-image car-1">image</div>
          <div className="card-title"><h2>Account</h2></div>
          <div className="card-text"><h4 id="text">Text</h4></div>
          <div className="card-account-button">
            <Link to="/editaccount">
              <button>Edit</button>
            </Link>
          </div>
        </div>

        <div className="card security">
          <div className="card-image car-2">image</div>
          <div className="card-title"><h2>Security</h2></div>
          <div className="card-text"><h4 id="text">Text</h4></div>
          <div className="card-button">
            <Link to="/editsecurity">
              <button>Edit</button>
            </Link>
          </div>
        </div>

        <div className="card payment">
        <div className="card-image car-3">image</div>
          <div className="card-payment-info">
            <h2>Payment Information</h2></div>
            <div className="card-text "><h4 id="text">Text</h4></div>
          <div className="card-button cardButton">
            <Link to="/editpayment">
              <button>Edit</button>
            </Link>
          </div>
        </div>

      </section>
    );
  }
}

const mapState = (state) => {
  // console.log(state)
  return {
    auth: state.auth,
  };
};

export default connect(mapState)(Account);
