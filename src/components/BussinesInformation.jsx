import React, { useContext } from "react";
import "./style/owner.scss";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { multiStepContex } from "../StepContex";

export default function BussinesInformation() {
  const { setCureentStep, userData, setUserData } = useContext(multiStepContex);

  return (
    <div className="d-flex flex-column bd-highlight mb-3">
      <div className="d-flex flex-column p-2 bd-highlight">
        <label className="fs-6">Bussiness Name</label>
        <input
          width={300}
          className="mt-3"
          value={userData["businessName"]}
          onChange={(e) =>
            setUserData({ ...userData, bussinessName: e.target.value })
          }
          type="text"
          placeholder="Bussiness Name"
        />
      </div>
      <div className="d-flex flex-column p-2 bd-highlight mt-3">
        <label htmlFor="">BUssiness Phone</label>
        <PhoneInput country={"id"} className="phone-flags" />
      </div>
      <div className="row justify-content-between">
        <div className="col-4">
          <label htmlFor="">Country</label>
          <select
            className="form-select"
            aria-label="Default select example"
            value={userData["option"]}
            onChange={(e) =>
              setUserData({ ...userData, option: e.target.value })
            }
          >
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div className="col-4">
          <label htmlFor="">Provincy/State</label>
          <select
            className="form-select"
            aria-label="Default select example"
            value={userData["option"]}
            onChange={(e) =>
              setUserData({ ...userData, option: e.target.value })
            }
          >
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div className="col-4">
          <label htmlFor="">City</label>
          <select
            className="form-select"
            aria-label="Default select example"
            value={userData["option"]}
            onChange={(e) =>
              setUserData({ ...userData, option: e.target.value })
            }
          >
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
      <div className="d-flex flex-column p-2 bd-highlight">
        <label htmlFor="">Complete Address</label>
        <input
          type="text"
          placeholder="full name please"
          className="mt-3"
          value={userData["address"]}
          onChange={(e) =>
            setUserData({ ...userData, address: e.target.value })
          }
        />
      </div>
      <div className="d-flex flex-column p-2 bd-highlight">
        <label htmlFor="">PIN Location</label>
        <input
          type="number"
          placeholder="full name please"
          className="mt-3"
          value={userData["pin"]}
          onChange={(e) => setUserData({ ...userData, pin: e.target.value })}
        />
      </div>
      <div className="d-flex flex-column p-2 bd-highlight">
        <label htmlFor="">Bussines Profile Picture</label>
        <input
          value={userData["file"]}
          onChange={(e) => setUserData({ ...userData, file: e.target.value })}
          type="file"
          placeholder="Photo Profile"
          className=" mt-3"
          width={760}
          height={240}
        />
      </div>
      <div className="d-flex justify-content-between p-2 bd-highlight mt-3">
        <button onClick={() => setCureentStep(1)} className="btn btn-secondary">
          Back
        </button>
        <button onClick={() => setCureentStep(3)} className="btn btn-primary">
          Next
        </button>
      </div>
    </div>
  );
}
