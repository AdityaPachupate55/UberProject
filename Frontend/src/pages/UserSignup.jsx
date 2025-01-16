import React, { useState } from "react"; // Added useState import
import { Link } from "react-router-dom";

const UserSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userData, setUserData] = useState({})

  const submitHandler = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");

    setUserData({
      firstName:firstName,
      lastName:lastName,
      email: email,
      password: password,
    });

    console.log(userData);
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
          <h3 className="text-lg mb-2 font-medium">What's your name ?</h3>
          <div className="flex gap-4 mb-6">
            <input
              required
              type="text"
              value={firstName}
              onChange={(e)=>{setFirstName(e.target.value)}}
              placeholder="First name"
              className="bg-[#eeeeee] rounded px-4 py-2  border w-1/2  text-base placeholder:text-sm"
            />
            <input
              required
              type="text"
              value={lastName}
              onChange={(e)=>{setLastName(e.target.value)}}
              placeholder="Last name"
              className="bg-[#eeeeee] rounded px-4 py-2  border w-1/2 text-base placeholder:text-sm"
            />
          </div>

          <h3 className="text-lg mb-2 font-medium">What's your email ?</h3>
          <input
            required
            type="email"
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
            placeholder="email@example.com"
            className="bg-[#eeeeee] rounded px-4 py-2 mb-7 border w-full text-base placeholder:text-sm"
          />

          <h3 className="text-lg mb-2 font-medium">Enter password</h3>
          <input
            required
            type="password"
            placeholder="password"
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
            className="bg-[#eeeeee] rounded px-4 py-2 mb-7 border w-full text-lg placeholder:text-base"
          />

          <button className="bg-black text-white font-semibold rounded-md px-4 py-2 mb-5 border w-full placeholder:text-base">
            Signup
          </button>
        </form>
        <p className="text-center ">
          Existing User ?
          <Link to="/login" className="text-blue-600">
            {" "}
            Login
          </Link>
        </p>
      </div>

      <div>
        <p className="text-[10px] text-center leading-tight">
          This site is protected by reCAPTCHA and the{" "}
          <span className="underline">Google Privacy Policy</span> and{" "}
          <span className="underline">Terms of Service apply</span>.
        </p>
      </div>
    </div>
  );
};

export default UserSignup;
