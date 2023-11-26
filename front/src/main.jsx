import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import LoginForm from "./components/LoginForm.jsx";
import PostForm from "./components/PostForm.jsx";
import SignupForm from "./components/SignupForm.jsx";
import ViewProduct from "./components/ViewProduct.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<SignupForm />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/product" element={<PostForm />} />
      <Route path="/view_product" element={<ViewProduct />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
