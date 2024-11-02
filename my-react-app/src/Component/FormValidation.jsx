import { useEffect, useState } from "react";
const FormValidation = () => {
  let [formValue, setFormValue] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    age: 0,
  });
  let [previousformValue, setPreviousFormValue] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    age: 0,
  });
  let [errorMessage, setErrorsMessage] = useState({});
  useEffect(() => {
    if (formValue.dob) {
      let today = new Date();
      let todayYear = today.getFullYear();
      let todayMonth = today.getMonth() + 1;
      let todayDate = today.getDate();
      let InputYear = formValue.dob.substring(0, 4);
      let InputMonth = formValue.dob.substring(5, 7);
      let InputDate = formValue.dob.substring(8, 10);
      let ageValue = todayYear - InputYear;
      if (
        todayMonth < InputMonth ||
        (InputMonth == todayMonth && todayDate < InputDate)
      ) {
        ageValue--;
      }
      setFormValue({ ...formValue, ["age"]: ageValue });
    }
  }, [formValue.dob]);
  let handleEvent = (e) => {
    let { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
    let errors = {};
    if (!formValue.dob.trim()) {
      errors.dob = "Date of Birth is required";
    } else if (formValue.age > 40) {
      errors.dob = "Age should be less than 40";
    }
    if (Object.keys(errors).length === 0) {
    } else {
      setErrorsMessage(errors);
    }
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    let errors = {};
    let characterRegex = /^[a-zA-Z]+$/;

    if (!formValue.firstName.trim()) {
      errors.firstName = "First Name is required";
    } else if (!characterRegex.test(formValue.firstName)) {
      errors.firstName = "First Name should be in characters";
    }
    if (!formValue.lastName.trim()) {
      errors.lastName = "Last Name is required";
    } else if (!characterRegex.test(formValue.lastName)) {
      errors.lastName = "Last Name should be in characters";
    }
    if (!formValue.dob.trim()) {
      errors.dob = "Date of Birth is required";
    } else if (formValue.age > 40) {
      errors.dob = "Age should be less than 40";
    }
    if (Object.keys(errors).length === 0) {
      alert("Form Submitted");
      // console.log(formValue);
      setPreviousFormValue(formValue);
      setErrorsMessage({});
    } else setErrorsMessage(errors);
  };
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="firstName">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={formValue.firstName}
            onChange={handleEvent}
          />
          {errorMessage.firstName && (
            <p style={{ color: "red" }}>{errorMessage.firstName}</p>
          )}
        </div>
        <div className="lastName">
          <label htmlFor="firstName">Second Name</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={formValue.lastName}
            onChange={handleEvent}
          />
          {errorMessage.lastName && (
            <p style={{ color: "red" }}>{errorMessage.lastName}</p>
          )}
        </div>
        <div className="dob">
          <label htmlFor="dob">Date</label>
          <input
            type="date"
            name="dob"
            id="dob"
            value={formValue.dob}
            onChange={handleEvent}
          />
          {errorMessage.dob && (
            <p style={{ color: "red" }}>{errorMessage.dob}</p>
          )}
        </div>
        <div className="age">
          <label htmlFor="age">Age</label>
          <input
            readOnly
            type="text"
            name="age"
            id="age"
            value={formValue.age}
          />
        </div>
        <button
          type="reset"
          onClick={() => {
            setFormValue(previousformValue);
          }}
        >
          Reset
        </button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default FormValidation;
