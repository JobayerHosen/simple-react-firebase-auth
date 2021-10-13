import React from "react";
import useAuth from "../../hooks/useAuth";

const Home = () => {
  const { user } = useAuth();
  return (
    <div className="d-flex flex-column vw-100 vh-100 justify-content-center align-items-center p-5">
      <h1 className="text-success">Wellcome!</h1>
      <h1 className="text-warning">{user?.displayName}</h1>
    </div>
  );
};

export default Home;
