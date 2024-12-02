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

import { action as registerUser } from "./pages/Register"
import { action as loginUser } from "./pages/Login"

import { store } from "./store"

const router = createBrowserRouter(
  [
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
    { path: "/login", element: <Login />, errorElement: <Error />, action: loginUser(store) },
    { path: "/register", element: <Register />, errorElement: <Error />, action: registerUser }
  ],
  {
    future: {
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_relativeSplatPath: true,
      v7_skipActionErrorRevalidation: true
    }
  }
)

const App = () => {
  return <RouterProvider router={router} future={{ v7_startTransition: true }}></RouterProvider>
}

export default App
