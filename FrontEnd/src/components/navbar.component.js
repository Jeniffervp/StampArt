import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <nav
        className="navbar navbar-light shadow-sm bg-white rounded"
        style={{ backgroundColor: "#ffffff" }}
      >
        <Link to="/">
          <div className="navbar-brand" style={letters}>
            <h3>StampArt</h3>
          </div>
        </Link>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to="/" style={{ color: "#f44336" }}>
              <div className="nav-link" style={letters}>
                Home <span className="sr-only">(current)</span>
              </div>
            </Link>
          </li>
        </ul>

        <div className="float-right">
          {this.props.token === '' ? <Link to="/login">
            <button className="btn btn-dark" type="submit">
              Log in
          </button>
          </Link>
            :
            <div className="btn-group dropleft">
              <Link className="btn btn-dark dropdown-toggle" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown link
               </Link>
              <div className="dropdown-menu pb-0" aria-labelledby="dropdownMenuLink">
                <Link to="/profile" className="dropdown-item" >Profile</Link>
                <Link className="dropdown-item" to="/upload" >Create Product</Link>
                <a className="dropdown-item" style={{ backgroundColor: "#f44336", color: "#fff" }} >Loggout</a>
              </div>
            </div>}

        </div>
      </nav>
    );
  }
}

const letters = {
  color: "#f44336"
};

export default withRouter(Navbar);
