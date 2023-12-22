import toast from "react-hot-toast";
import useAuthContext from "../hooks/useAuthContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const { signInUser, googleSingIn } = useAuthContext();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const location = useLocation();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signInUser(email, password)
      .then((res) => {
        console.log(res);
        toast.success("Successfully logged.");
        navigate(location?.state ? location.state : "/dashboard");
        setError("");
      })
      .catch((err) => {
        console.log(err.message);
        setError(err.message);
      });
  };

  const handleGoogleLogin = (e) => {
    e.preventDefault();
    googleSingIn()
      .then((res) => {
        console.log(res.data);
        toast.success("Successfully logged.");
        navigate(location?.state ? location.state : "/dashboard");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="card shadow-2xl bg-base-100 max-w-md mx-auto my-32">
      <h1 className="text-5xl font-bold text-center mt-5 text-[#A8CA73]">
        Login now!
      </h1>
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Your email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input input-bordered"
            required
          />
        </div>
        <p className="text-red-600">{error}</p>
        <div className="form-control mt-6">
          <button className="btn bg-[#A8CA73] font-bold">Login</button>
        </div>
        <p className="text-center">
          Do not have an account? Please{" "}
          <Link className="text-[#A8CA73] font-bold underline" to={"/register"}>
            Register
          </Link>
        </p>
        <div className="divider font-semibold">or</div>
        <a onClick={handleGoogleLogin} className="btn font-bold" href="">
          {/* <FaGoogle></FaGoogle> */}
          Login With Google
        </a>
      </form>
    </div>
  );
};

export default Login;
