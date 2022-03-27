import React, { useContext } from "react";
import Logo from "../../assets/icon/logo.svg";
import Cart from "../../assets/icon/cart.svg";
import WaterFall from "../../assets/icon/waterfall.svg";
import DotRight from "../../assets/icon/dot.svg";
import DotLeft from "../../assets/icon/dotLeft.png";
import Handphone1 from "../../assets/icon/handphone1.svg";
import Handphone2 from "../../assets/icon/handphone2.svg";
import CashBag from "../../assets/icon/cashbag.svg";
import "./dashboard.scss";
import { multiStepContex } from "../../StepContex.js";

export default function Dashoboard() {
  const { setCureentStep } = useContext(multiStepContex);

  return (
    <div className="container">
      <div className="d-flex justify-content-between mt-5">
        <img src={Logo} alt="" />
        <span>Back to main page</span>
      </div>
      <div className="main-content-text d-flex flex-column align-items-center justify-content-center mb-3 mt-5">
        <h1>Tired of the old way of selling online?</h1>
        <span>
          Try BIG Tenant, feel the new experience of online selling in virtual
          world. Register, earn money, and let’s get rich!{" "}
        </span>
        <button
          className="btn btn-primary"
          onClick={() => {
            setCureentStep(1);
          }}
        >
          Register Now
        </button>
      </div>
      <div className="flex-column align-items-center justify-content-center mb-3">
        <div id="satu">
          <img src={Cart} alt="cart" width={30} height={28} />
        </div>
        <div id="dua">
          <img src={WaterFall} alt="cart" width={640} height={390} />
        </div>
        <div id="empat">
          <img src={DotRight} alt="cart" width={200} height={370} />
        </div>
        <div id="tiga">
          <img src={DotLeft} alt="cart" />
        </div>
        <div id="lima">
          <img src={Handphone1} alt="cart" width={240} height={450} />
        </div>
        <div id="enam">
          <img src={Handphone2} alt="cart" width={180} height={240} />
        </div>
        <div id="tujuh">
          <img src={CashBag} alt="cart" width={32} height={20} />
        </div>
      </div>
    </div>
  );
}
