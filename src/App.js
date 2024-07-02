import React from "react";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Login from "./Pages/Login";
import Cart from "./Pages/Cart"
import Product from "./Components/Product";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  ScrollRestoration
} from "react-router-dom";
import { productsData } from "./Api/Api";

const Layout=()=>{
  return(
    <div>
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  )
};

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout />,
    children:[
      {
        path:"/",
        element:<Home />,
        loader: productsData,
      },
      {
        path:"/Cart",
        element: <Cart />,
      },
      {
        path:"product/:id",
        element: <Product />,
      },
{
  path:"/Login",
  element:<Login />,
},
    ]
  }
])

function App() {

  return (
    <div className="font-bodyFont">
    <RouterProvider router={router} />
    </div>
  );
}

export default App;
