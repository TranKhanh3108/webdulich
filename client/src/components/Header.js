import React from "react";
import { NavLink } from "react-router-dom";
import IHanoiicon from '../image/Hanoiicon.png';

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{backgroundColor:'#0a4275',height:'60px'}} >
        <div className="container-fluid">
          <NavLink className="navbar-brand" href="#">
            <img src={IHanoiicon} alt="IHanoiicon" style={{height:'40px'}}/>
            Du lịch Hà Nội 
          </NavLink>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Trang chủ
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/dangnhap" className="nav-link" href="#">
                  Đăng nhập
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/dangki" className="nav-link" href="#">
                  Đăng kí
                </NavLink>
              </li>
              {/*             <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
  */}{" "}
            </ul>
            {/*
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
*/}{" "}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
