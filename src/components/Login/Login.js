import React from "react";
import auth from "../../firebase.init";

import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  return (
    <div>
      <button
        className="btn btn-primary mt-5 "
        onClick={() => {
          signInWithGoogle();
          navigate("/home");
        }}
      >
        Login Via google
      </button>
    </div>
  );
};

export default Login;
