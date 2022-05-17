import React, { useContext } from "react";
import OwnerInformation from "../components/OwnerInformation.jsx";
import "./register.scss";
import Typography from "@mui/material/Typography";
import StepContent from "@mui/material/StepContent";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import BussinesInformation from "../components/BussinesInformation.jsx";
import Review from "../components/Review.jsx";
import { multiStepContex } from "../StepContex.js";
import AccountInformation from "../components/AccountInformation.jsx";
import logo from "../assets/icon/logo.svg";
import Ellipse1 from "../assets/icon/Ellipse1.svg";
import Ellipse2 from "../assets/icon/Ellipse2.svg";
import Dashoboard from "../components/Dashboard/Dashoboard.jsx";

const steps = [
  {
    label: "Select campaign settings",
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: "Select campaign settings",
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: "Create an ad group",
    description:
      "An ad group contains one or more ads which target a shared set of keywords.",
  },
  {
    label: "Create an ad",
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
  {
    label: "Create an ad",
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
  {
    label: "Create an ad",
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
];

export default function Register() {
  const { currentStep, finalData } = useContext(multiStepContex);

  function showStep(step) {
    // eslint-disable-next-line default-case
    switch (step) {
      case 0:
        return <Dashoboard />;
      case 1:
        return <OwnerInformation />;
      case 2:
        return <BussinesInformation />;
      case 3:
        return <AccountInformation />;
      case 4:
        return <Review />;
    }
  }

  return (
    <div className="content">
      <div className="leftStepper">
        <img src={Ellipse1} alt="logo" width={150} className="eclips" />
        <img src={logo} alt="logo" width={30} className="logo mt-5" />
        <img src={Ellipse2} alt="logo" width={150} className="eclips2" />
        <div id="step">
          <Stepper activeStep={currentStep} orientation="vertical">
            {steps.map((step, index) => (
              <Step key={step.label}>
                <StepLabel
                  optional={
                    index === 0 ? (
                      <Typography variant="caption">Last step</Typography>
                    ) : null
                  }
                >
                  {step.label}
                </StepLabel>
                <StepContent>
                  <Typography>{step.description}</Typography>
                </StepContent>
              </Step>
            ))}
          </Stepper>
        </div>
      </div>
      <div className="formData">
        {showStep(currentStep)}
        {finalData.length > 0 ? <Review /> : ""}
      </div>
    </div>
  );
}
