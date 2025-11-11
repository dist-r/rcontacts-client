import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";

function Protected() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) navigate("/signin");
  }, [token, navigate]);

  // Bisa tambahkan loader di sini kalau mau
  return <Outlet />;
}

export default Protected;
