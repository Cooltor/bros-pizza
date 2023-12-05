import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <header>
      <Link to="/">Yummies Bros Pizzas Co.</Link>
      <SearchOrder />

      <p>Romain</p>
    </header>
  );
}

export default Header;
