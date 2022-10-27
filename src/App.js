import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { lazy, Suspense } from "react";
const App = () => {
  const Login = lazy(() => import("./Pages/login/Login"));
  const Register = lazy(() => import("./Pages/register/Register"));
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "register",
      element: <Register />,
    },
    {
      path: "*",
      element: <h1>404</h1>,
    },
  ]);
  return (
    <div className="App">
      <Suspense fallback={<h1>loading...</h1>}>
        <RouterProvider router={router} />
      </Suspense>
    </div>
  );
};

export default App;
