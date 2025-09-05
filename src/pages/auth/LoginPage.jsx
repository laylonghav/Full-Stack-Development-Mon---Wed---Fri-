import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/userSlice";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState({ username: "", password: "" });
  function onLogin(e) {
    e.preventDefault();
    dispatch(setUser(data));
    navigate("/");
  }
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "red",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form
        onSubmit={onLogin}
        style={{
          width: "400px",
          backgroundColor: "gray",
          padding: "1rem",
          borderRadius: "2rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
        action=""
      >
        <h3 style={{ textAlign: "center" }}>Login</h3>
        <div
          style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          className=""
        >
          <label htmlFor="">Password</label>
          <input
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
            style={{
              border: "none",
              outline: "none",
              padding: "1rem",
              borderRadius: "1rem",
            }}
            type="text"
          />
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          className=""
        >
          <label htmlFor="">Username</label>
          <input
            value={data.username}
            onChange={(e) => setData({ ...data, username: e.target.value })}
            style={{
              border: "none",
              outline: "none",
              padding: "1rem",
              borderRadius: "1rem",
            }}
            type="text"
          />
        </div>
        <button
          style={{
            marginTop: "2rem",
            border: "none",
            outline: "none",
            padding: "1rem",
            borderRadius: "1rem",
          }}
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
}
