import CreateUser from "../features/user/CreateUser";
import { useSelector } from "react-redux";
import Button from "../ui/Button";

function Home() {
  const username = useSelector((state) => state.user.username);

  return (
    <div className="my-10 px-4 text-center sm:my-16">
      <h1 className="mb-8  text-xl font-semibold md:text-3xl">
        La meilleure pizza.
        <br />
        <span className="text-yellow-500">
          Directement sortie du four, directement chez vous.
        </span>
      </h1>

      {username === "" ? (
        <CreateUser />
      ) : (
        <Button to="/menu" type="primary">
          Commander
        </Button>
      )}
    </div>
  );
}

export default Home;
