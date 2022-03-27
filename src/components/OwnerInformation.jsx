import React, { useContext } from "react";
import "./style/owner.scss";
// import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { multiStepContex } from "../StepContex";

export default function OwnerInformation() {
  const { setCureentStep, userData, setUserData } = useContext(multiStepContex);

  return (
    <div className="d-flex flex-column align-items-center justify-content-center mb-3">
      <form className="form-regist bg-red">
        <div className="d-flex flex-column p-2">
          <label htmlFor="">Owner Full Name</label>
          <input
            value={userData["name"]}
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
            type="text"
            placeholder="full name please"
            className="input-field mt-3"
          />
        </div>
        <div className="d-flex flex-column p-2 bd-highlight">
          <label htmlFor="">Email</label>
          <input
            value={userData["email"]}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
            type="email"
            placeholder="email"
            className="input-field mt-3"
          />
        </div>
        <div className="d-flex flex-column p-2 bd-highlight mt-3">
          <label htmlFor="">Owner Number</label>
          <input
            value={userData["number"]}
            onChange={(e) =>
              setUserData({ ...userData, number: e.target.value })
            }
            type="number"
            placeholder="Phone Number"
            className="input-field mt-3"
          />
          {/* <PhoneInput country={"id"} className="phone-flags" /> */}
        </div>
        <div className="d-flex flex-column p-2 bd-highlight">
          <label htmlFor="">Owner Indentifity Card</label>
          <input
            value={userData["file"]}
            onChange={(e) => setUserData({ ...userData, file: e.target.value })}
            type="file"
            placeholder="Photo Profile"
            className="input-field mt-3"
            width={760}
            height={240}
          />
        </div>
      </form>
      <div className="d-flex flex-column p-2 bd-highlight mt-3">
        <button className="btn btn-primary" onClick={() => setCureentStep(2)}>
          Next
        </button>
      </div>
    </div>
  );
}
