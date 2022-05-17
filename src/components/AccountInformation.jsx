import React, { useContext } from "react";
import "./style/owner.scss";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { multiStepContex } from "../StepContex";

export default function AccountInformation() {
  const { setCureentStep, userData, setUserData, handleSubmit } =
    useContext(multiStepContex);

  return (
    <>
      <div className="d-flex flex-column align-items-center justify-content-center bd-highlight mb-3">
        <form>
          <div className="d-flex flex-column p-2 bd-highlight">
            <label>Email</label>
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
            <PhoneInput country={"id"} className="phone-flags" />
          </div>
        </form>
      </div>
      <div className="d-flex justify-content-between p-2 bd-highlight mt-3">
        <button onClick={() => setCureentStep(2)} className="btn btn-secondary">
          back
        </button>
        <button
          onClick={handleSubmit ? setCureentStep(4) : ""}
          className="btn btn-primary"
        >
          Next
        </button>
      </div>
    </>
  );
}
