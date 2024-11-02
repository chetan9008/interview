import { useState } from "react";
const Form = () => {
  let [fromValue, setFormValue] = useState({
    firstName: "",
    lastName: "",
    date: "",
  });
  let handleEvent = (e) => {
    console.log(e);
    let { name, value } = e.target;
    setFormValue({
      ...fromValue,
      [name]: value,
    });
  };
  return (
    <div className="form">
      <form>
        <div className="firstName">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={fromValue.firstName}
            onChange={handleEvent}
          />
        </div>
        <div className="lastName">
          <label htmlFor="firstName">Second Name</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={fromValue.lastName}
            onChange={handleEvent}
          />
        </div>
        <div className="date">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            name="date"
            id="date"
            value={fromValue.date}
            onChange={handleEvent}
          />
        </div>
      </form>
    </div>
  );
};
export default Form;
