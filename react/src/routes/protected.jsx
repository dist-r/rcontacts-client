import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";

function Protected() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) navigate("/signin");
  }, [token, navigate]);

  return <Outlet />;
}

export default Protected;
