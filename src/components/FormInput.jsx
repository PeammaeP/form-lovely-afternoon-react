const FormInput = ({ label, value, onChange }) => {
  return (
    <>
      <div>
        <label htmlFor={label}>
          {label} : {value}
        </label>
        <input type="text" onChange={onChange} value={value}></input>
      </div>
    </>
  );
};

export default FormInput;
