import { useSelector, useDispatch } from "react-redux";
import { getCart, clearCart } from "./cartSlice";
import { getUsername } from "../user/userSlice";

import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";

function Cart() {
  const username = useSelector(getUsername);
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="px-4 py-3 ">
      <LinkButton to="/menu">&larr; Retour au menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Votre panier, {username}</h2>

      <ul className="mt-3 divide-y divide-stone-200 border-b ">
        {cart.map((item) => (
          <CartItem key={item.pizzaId} item={item} />
        ))}
      </ul>

      <div className="mt-6 space-x-2">
        <Button type="primary" to="/order/new">
          Commander des pizzas
        </Button>

        <Button type="secondary" onClick={() => dispatch(clearCart())}>
          Vider le panier
        </Button>
      </div>
    </div>
  );
}

export default Cart;
