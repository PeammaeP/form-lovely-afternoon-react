import { useContext } from "react";
import FormInput from "../components/FormInput";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

const UserFirstNameEdit = () => {
  const { firstName, setFirstName } = useContext(UserContext);
  return (
    <>
      <div>
        <label htmlFor="FirstName"></label>
        <FormInput
          label="FirstName"
          onChange={(event) => setFirstName(event.target.value)}
          value={firstName}
        />
        <button>Edit</button>
        <Link to="/">
          <button>Back</button>
        </Link>
      </div>
    </>
  );
};

export default UserFirstNameEdit;
