import { Link } from "react-router-dom";
import { UserContext } from "./contexts/UserContext";
import { useContext } from "react";

const App = () => {
  const { firstName, lastName } = useContext(UserContext);
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [fullName, setFullName] = useState("");
  // const [errorMessage, setErrorMessage] = useState("");
  // const regex = /\d/;
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // recommend to use the object
  //   console.log({ firstName, lastName });
  // };
  // useEffect(() => {
  //   if (regex.test(firstName) || regex.test(lastName)) {
  //     setErrorMessage("Have The Number in your text , doesn't allowed !");
  //   } else {
  //     setErrorMessage("");
  //     setFullName(firstName.toUpperCase() + " " + lastName.toUpperCase());
  //   }
  // }, [firstName, lastName, regex]);
  // return (
  //   <form onSubmit={handleSubmit}>
  //     <div>
  //       FullName : {fullName}
  //       {errorMessage ? errorMessage : ""}
  //     </div>
  //     <FormInput
  //       label="Firstname"
  //       onChange={(event) => setFirstName(event.target.value)}
  //     />
  //     <FormInput
  //       label="Lastname"
  //       onChange={(event) => setLastName(event.target.value)}
  //     />
  //     <div>
  //       <button type="submit">Edit</button>
  //       <button
  //         onClick={() => {
  //           <FormInput label="Firstname" onChange={setFirstName("")} />;
  //           <FormInput label="Lastname" onChange={setLastName("")} />;
  //           setLastName("");
  //           setErrorMessage("");
  //         }}
  //       >
  //         Clear
  //       </button>
  //     </div>
  //   </form>
  // );
  return (
    <>
      <div>App</div>
      <div>FirstName : {firstName}</div>
      <div>LastName : {lastName}</div>
      <div>
        <Link to="/user-firstNameEdit">FirstName</Link>
      </div>
      <div>
        <Link to="/user-lastNameEdit">LastName</Link>
      </div>
    </>
  );
};

export default App;
