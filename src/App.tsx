import { createBrowserRouter, RouterProvider } from "react-router-dom"

import {
  HomeLayout,
  Landing,
  Error,
  Orders,
  Checkout,
  Products,
  SingleProduct,
  Cart,
  About,
  Login,
  Register
} from "./pages"
import { ErrorElement } from "./components"
import { loader as landingLoader } from "@/pages/Landing"
import { loader as productLoader } from "@/pages/Products"
import { loader as SingleProductLoader } from "@/pages/SingleProduct"

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
        loader: landingLoader
      },
      {
        path: "products",
        element: <Products />,
        errorElement: <ErrorElement />,
        loader: productLoader
      },
      {
        path: "products/:id",
        element: <SingleProduct />,
        errorElement: <ErrorElement />,
        loader: SingleProductLoader
      },
      { path: "cart", element: <Cart />, errorElement: <ErrorElement /> },
      { path: "about", element: <About />, errorElement: <ErrorElement /> },
      { path: "checkout", element: <Checkout />, errorElement: <ErrorElement /> },
      { path: "orders", element: <Orders />, errorElement: <ErrorElement /> }
    ]
  },
  { path: "/login", element: <Login />, errorElement: <Error /> },
  { path: "/register", element: <Register />, errorElement: <Error /> }
])

const App = () => {
  return <RouterProvider router={router}></RouterProvider>
}

export default App
