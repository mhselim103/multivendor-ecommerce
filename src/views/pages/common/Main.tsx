import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
// import { Home } from "../home/Home";

// const OtherComponent = React.lazy(() => import('./OtherComponent'));
const Home = React.lazy(() => import("../home/Home"));
const Login = React.lazy(() => import("../login/Login"));
const SingleProduct = React.lazy(
  () => import("../singleProduct/SingleProduct")
);
// code-splitting

export const Main = () => {
  return (
    <div className="container mx-auto">
      <Suspense fallback={<>Loading...</>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Suspense>
    </div>
  );
};
