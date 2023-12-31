import React, { useState } from "react";
import Layout from "../../components/Layout";
import bg01 from "../../image/bg01.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "../../pages/styles/AuthStyles.css";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  //form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/login", {
        email,
        password,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Đã có sai sót xảy ra");
    }
  };
  return (
    <Layout title="Đăng Nhập">
      <div className="dangnhap">
        <form onSubmit={handleSubmit} >
            <div className="limiter">
          <div className="container-login100">
            <div className="wrap-login100">
              <form className="login100-form validate-form">
                <span className="login100-form-title p-b-43">
                  Login to continue
                </span>
                <div
                  className="wrap-input100 validate-input"
                  data-validate="Valid email is required: ex@abc.xyz"
                >
                  <input className="input100" type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                  <span className="focus-input100" />
                  <span className="label-input100">Email</span>
                </div>
                <div
                  className="wrap-input100 validate-input"
                  data-validate="Password is required"
                >
                  <input className="input100" type="password" name="pass"value={password} onChange={(e) => setPassword(e.target.value)} />
                  <span className="focus-input100" />
                  <span className="label-input100">Password</span>
                </div>
                <div className="flex-sb-m w-full p-t-3 p-b-32">
                  <div className="contact100-form-checkbox">
                    <input
                      className="input-checkbox100"
                      id="ckb1"
                      type="checkbox"
                      name="remember-me"
                    />
                    <label className="label-checkbox100" htmlFor="ckb1">
                      Remember me
                    </label>
                  </div>
                  </div>
{/*             <div>
                    <a href="#" className="txt1">
                      Forgot Password?
                    </a>
                  </div>
                </div>
  */}
                <div className="container-login100-form-btn">
                  <button className="login100-form-btn">Login</button>
                </div>
                <div className="text-center p-t-46 p-b-20">
                  <span className="txt2">or sign up using</span>
                </div>
                {/*                <div className="login100-form-social flex-c-m">               <a
                    href="#"
                    classname="login100-form-social-item flex-c-m bg1 m-r-5"
                  ></a>

                  <i className="fa fa-facebook-f" aria-hidden="true" />
                  <a
                    href="#"
                    classname="login100-form-social-item flex-c-m bg2 m-r-5"
                  ></a>
                  <i className="fa fa-twitter" aria-hidden="true" />
                </div>
  */}
              </form>
              <div
                className="login100-more"
                style={{ backgroundImage: `url(${bg01})` }}
              ></div>
            </div>
          </div>
        </div>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
