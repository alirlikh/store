import { ActionFunction, Form, redirect } from "react-router-dom"
import SubmitBtn from "./SubmitBtn"
import FormInput from "./FormInput"
import { type ReduxStore } from "@/store"
import { Checkout, customFetch, formatAsDollars } from "@/utils"
import { toast } from "@/hooks/use-toast"
import { clearCart } from "@/features/cart/cartSlice"

type FormData = {
  name: string
  address: string
}

export const action =
  (store: ReduxStore): ActionFunction =>
  async ({ request }): Promise<null | Response> => {
    const formData = await request.formData()
    const { name, address } = Object.fromEntries(formData) as FormData

    if (!name || !address) {
      toast({ description: "please fill out all fields" })
      return null
    }

    const user = store.getState().userState.user
    if (!user) {
      toast({ description: "please login to place an order" })
      return redirect("/login")
    }

    const { cartItems, orderTotal, numItemsInCart } = store.getState().cartState

    const info: Checkout = {
      name,
      address,
      chargeTotal: orderTotal,
      orderTotal: formatAsDollars(orderTotal),
      numItemsInCart,
      cartItems
    }

    try {
      const response = await customFetch.post(
        "/orders",
        { data: info },
        {
          headers: {
            Authorization: `Bearer ${user.jwt}`
          }
        }
      )

      console.log(`foo =`, response)
      store.dispatch(clearCart())

      toast({ description: "order placed" })
      return redirect("/orders")
    } catch (error) {
      toast({ description: "order failed" })

      return null
    }
  }

const CheckoutForm = () => {
  return (
    <Form method="post" className="flex flex-col gap-y-4">
      <h4 className="font-medium text-xl mb-4">Shipping Information</h4>
      <FormInput label="first name" name="name" type="text" />
      <FormInput label="address" name="address" type="text" />
      <SubmitBtn text="Place Your Order" className="mt-4" />
    </Form>
  )
}
export default CheckoutForm
