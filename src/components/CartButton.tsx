import { Link } from "react-router-dom"
import { Button } from "./ui/button"
import { ShoppingCart } from "lucide-react"
import { useAppSelector } from "@/hooks"

const CartButton = () => {
  const numItemsInCart = useAppSelector((state) => state.cartState.numItemsInCart)

  return (
    <Button
      asChild
      size={"icon"}
      variant={"outline"}
      className="flex justify-center items-center relative"
    >
      <Link to={"/cart"}>
        <ShoppingCart />
        <span className="absolute -top-3 -right-3 bg-primary text-white rounded-full w-6 h-6 text-xs flex justify-center items-center">
          {numItemsInCart}
        </span>
      </Link>
    </Button>
  )
}

export default CartButton
