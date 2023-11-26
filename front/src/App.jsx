import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import { Outlet } from "react-router-dom";
import PostForm from "./components/PostForm";
import "./index.css";

function App() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
