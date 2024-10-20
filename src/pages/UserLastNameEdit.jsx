import { useContext } from "react";
import FormInput from "../components/FormInput";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

const UserLastNameEdit = () => {
  const { lastName, setLastName } = useContext(UserContext);
  return (
    <>
      <div>
        <label htmlFor="LastName"></label>
        <FormInput
          label="LastName"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
        <button>Edit</button>
        <Link to="/">
          <button>Back</button>
        </Link>
      </div>
    </>
  );
};

export default UserLastNameEdit;
