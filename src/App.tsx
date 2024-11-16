import { Button } from "./components/ui/button"
import { useAppSelector } from "./hooks"
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

const App = () => {
  return (
    <>
      <h1>app</h1>
      <Button variant={"outline"}>Click me</Button>
    </>
  )
}

export default App
