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

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      { index: true, element: <Landing /> },
      { path: "products", element: <Products /> },
      { path: "products/:id", element: <SingleProduct /> },
      { path: "cart", element: <Cart /> },
      { path: "about", element: <About /> },
      { path: "checkout", element: <Checkout /> },
      { path: "orders", element: <Orders /> }
    ]
  },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> }
])

const App = () => {
  return <RouterProvider router={router}></RouterProvider>
}

export default App
