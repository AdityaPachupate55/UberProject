import React, { useState } from "react";
import { Link } from "react-router-dom";

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [captainData, setCaptainData] = useState({});
  
    const submitHandler = (e) => {
      e.preventDefault();
      setEmail("");
      setPassword("");
  
      setCaptainData({
        email: email,
        password: password,
      });
    };

  return (
    <div>
      <div className="h-screen p-7 flex flex-col justify-between">
        <div>
          <img
            src="https://www.svgrepo.com/show/505031/uber-driver.svg"
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
            <Link to="/captain-signup" className="text-blue-600">
              {" "}
              Signup as a captain
            </Link>
          </p>
        </div>

        <div>
          <Link to="/login">
            <button className="bg-[#5CB338] flex items-center justify-center text-white font-semibold rounded-md px-4 py-2 mb-7 border w-full placeholder:text-base">
              Sign in as User
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CaptainLogin;
