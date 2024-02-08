import React, { FC, ReactNode, useEffect, useState } from "react";
import "./Stepper.css";

interface Step {
  topLabel: string;
  bottomLabel: string;
  content: ReactNode;
}
interface StepperProps {
  activeStep?: number;
  steps?: Step[];
  containerWidth?: number;
  heightforMobileStepper?: string;
  topLabelFontSize?: string;
  bottomLabelFontSize?: string;
  contentFontSize?: string;
  topLabelFontColor?: string;
  bottomLabelFontColor?: string;
  contentFontColor?: string;
  stepperWrapperBackgroundColor?: string;
  stepperContentWrapperBackgroundColor?: string;
}

const Stepper: FC<StepperProps> = ({
  activeStep = 1,
  steps = [],
  containerWidth = 7,
  heightforMobileStepper = "5rem",
  topLabelFontSize = "0.7rem",
  bottomLabelFontSize = "0.7rem",
  contentFontSize = "0.7rem",
  topLabelFontColor = "rgb(114, 114, 114)",
  bottomLabelFontColor = "rgb(114, 114, 114)",
  contentFontColor = "rgb(114, 114, 114)",
  stepperWrapperBackgroundColor = "rgb(255, 255, 255)",
  stepperContentWrapperBackgroundColor = "rgb(255, 255, 255)",
}) => {
  const [contWidth, setContWidth] = useState(containerWidth);
  const [hforMobileStepper, setHforMobileStepper] = useState("4rem");
  const [tLabelFontSize, setTLabelFontSize] = useState(topLabelFontSize);
  const [bLabelFontSize, setBLabelFontSize] = useState(bottomLabelFontSize);
  const [cFontSize, setCFontSize] = useState(contentFontSize);

  const [activeContent, setActiveContent] = useState(4);

  const [isScreenSmall, setIsScreenSmall] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    const handler = (event) => {
      const isMatch = event.matches || event.type === "load"; // Add this line
      if (isMatch) {
        setIsScreenSmall(true);
        setContWidth((prevWidth) => prevWidth * 1);
        setHforMobileStepper(heightforMobileStepper);
        setTLabelFontSize(
          (prevFontSize) => `calc( ${prevFontSize} - 0.1rem  )`
        );
        setBLabelFontSize(
          (prevFontSize) => `calc( ${prevFontSize} - 0.1rem  )`
        );
        setCFontSize((prevFontSize) => `calc( ${prevFontSize} - 0.1rem  )`);
      } else {
        setIsScreenSmall(false);
        setContWidth(containerWidth);
        setTLabelFontSize(topLabelFontSize);
        setBLabelFontSize(bottomLabelFontSize);
      }
    };

    handler(mediaQuery);

    mediaQuery.addEventListener("change", handler);

    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return (
    <>
      <div className="stepper-wrapper">
        <span
          style={{ backgroundColor: stepperWrapperBackgroundColor }}
          className="step-container"
        >
          {steps.map((step, index) => {
            return (
              <div
                key={index}
                style={{
                  width: `${contWidth}rem`,
                  height: hforMobileStepper,
                }}
                className={`step  ${index + 1 <= activeStep && "active"} ${
                  index + 1 === activeStep &&
                  !(index + 1 === steps.length) &&
                  "current"
                }
              ${index + 1 <= activeStep && index + 1 === steps.length && "last"}
              ${index + 1 === activeContent && "active-content"}
              `}
              >
                <div
                  style={{
                    backgroundColor: index + 1 <= activeStep && "#26A541",
                  }}
                  className="step-icon"
                  onMouseEnter={() =>
                    index + 1 <= activeStep && setActiveContent(index + 1)
                  }
                ></div>
                <div
                  style={{
                    fontSize: tLabelFontSize,
                    color:
                      index + 1 <= activeStep
                        ? topLabelFontColor
                        : "rgb(168, 168, 168)",
                  }}
                  className="step-title1"
                >
                  {step.topLabel}
                </div>
                <div
                  style={{
                    fontSize: bLabelFontSize,
                    color:
                      index + 1 <= activeStep
                        ? bottomLabelFontColor
                        : "rgb(168, 168, 168)",
                  }}
                  className="step-title2"
                >
                  {step.bottomLabel}
                </div>
                <div className="step-title3"></div>
              </div>
            );
          })}
        </span>
        <div
          style={{
            backgroundColor: stepperContentWrapperBackgroundColor,
            display: steps.length === 0 ? "none" : "block",
          }}
          className="stepper-content-wrapper"
        >
          <div
            style={{
              fontSize: cFontSize,
              color: contentFontColor,
              width: isScreenSmall
                ? `${contWidth}rem`
                : `calc(4 * ${contWidth}rem)`,
            }}
            className="content"
          >
            {steps[activeContent - 1]?.content}
          </div>
        </div>
      </div>
    </>
  );
};

export default Stepper;
