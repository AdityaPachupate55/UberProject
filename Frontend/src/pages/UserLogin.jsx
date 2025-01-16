import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");

    setUserData({
      email: email,
      password: password,
    });
  };

  return (
    <div className="h-screen p-7 flex flex-col justify-between">
      <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          className="w-16 mb-10"
        ></img>
        <form
          action=""
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3 className="text-xl mb-2 font-medium">What's your email ?</h3>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="email@example.com"
            className="bg-[#eeeeee] rounded px-4 py-2 mb-7 border w-full text-lg placeholder:text-base"
          />

          <h3 className="text-xl mb-2 font-medium">Enter password</h3>
          <input
            required
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="bg-[#eeeeee] rounded px-4 py-2 mb-7 border w-full text-lg placeholder:text-base"
          />

          <button className="bg-black text-white font-semibold rounded-md px-4 py-2 mb-5 border w-full placeholder:text-base">
            Login
          </button>
        </form>
        <p className="text-center ">
          New here ?
          <Link to="/signup" className="text-blue-600">
            {" "}
            Create new account
          </Link>
        </p>
      </div>

      <div>
        <Link to='/captain-login' >
          <button className="bg-[#5CB338] flex items-center justify-center text-white font-semibold rounded-md px-4 py-2 mb-7 border w-full placeholder:text-base">
            Sign in as captain
          </button>
        </Link>
      </div>
    </div>
  );
};
5;
export default UserLogin;
