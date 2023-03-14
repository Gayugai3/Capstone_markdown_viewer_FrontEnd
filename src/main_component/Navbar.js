import axios from "axios";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { config } from "../config";
import UserContext from "../context/UserContext";

function Navbar() {
  const navigate = useNavigate();
  const UserContextData = useContext(UserContext);

  const name = localStorage.getItem("name");
  const doLogout = () => {
    if (window.confirm("Do you really want to Logout?")) {
      try {
        localStorage.clear();
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    }
  };
  const data = UserContextData.markdown;
  const email = localStorage.getItem("email");
  const SaveData = async (data, email) => {
    try {
      const users = await axios.post(`${config.api}/content/save/${email}`, {
        data: data,
      });
      console.log(data);
      toast.success(users.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
  };
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light navbar-fixed-top ml-2 mr-2"
      style={{ backgroundColor: "#e3f2fd !important" }}
    >
      <div className="col-lg-8 ml-2 d-flex justify-content-start">
        <h3>{`Welcome | ${name}`} </h3>
      </div>

      <div className="col-lg-4 ">
        <div
          className="collapse navbar-collapse d-flex justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <button
              className="btn btn-outline-success m-2"
              onClick={() => SaveData(data, email)}
            >
              Save
            </button>
            <Link
              className="btn btn-outline-primary m-2"
              to="https://enterprise.github.com/downloads/en/markdown-cheatsheet.pdf"
              target={"_blank"}
            >
              Help
            </Link>
            <button
              className="btn btn-outline-danger m-2"
              onClick={() => {
                doLogout();
              }}
            >
              {" "}
              Logout{" "}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
