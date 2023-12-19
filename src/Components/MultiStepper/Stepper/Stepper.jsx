import React, { useEffect, useRef, useState } from "react";

const Stepper = ({ currentStep, steps }) => {
  const [newStep, setNewStep] = useState([]);
  const stepRef = useRef();
  const updateStep = (stepNumber, steps) => {
    const newSteps = [...steps];
    let count = 0;
    while (count < newSteps.length) {
      if (count === stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          heighlighted: true,
          selected: true,
          completed: true,
        };
        count++;
      } else if (count < stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          heighlighted: false,
          selected: true,
          completed: true,
        };
        count++;
      } else {
        newSteps[count] = {
          ...newSteps[count],
          heighlighted: false,
          selected: false,
          completed: false,
        };
        count++;
      }
    }
    return newSteps;
  };
  useEffect(() => {
    const stepsState = steps.map((step, index) =>
      Object.assign(
        {},
        {
          description: step,
          completed: false,
          highlighted: index === 0 ? true : false,
          selected: index === 0 ? true : false,
        }
      )
    );
    stepRef.current = stepsState;
    const current = updateStep(currentStep - 1, stepRef.current);
    setNewStep(current);
  }, [steps, currentStep]);
  const displaySteps = newStep.map((step, index) => {
    return (
      <div
        key={index}
        className={
          index !== newStep.length - 1
            ? "w-full flex items-center mt-14"
            : " flex items-center mt-14"
        }
      >
        <div className='relative flex flex-col items-center '>
          <div
            className={`absolute -top-[100px] text-center mt-16 w-8 mx-2 md:w-32 lg:w-64 text-[8px] md:text-[15px] ${step.heighlighted
                ? "text-[#000] font-medium lg:font-semibold"
                : step.completed ? "text-[#000] font-medium lg:font-semibold" : "text-[#535353] font-normal"
              }`}
          >
            {step.description}
          </div>
          <div
            className={`rounded-full  transition duration-500 ease-in-out flex items-center justify-center py-3 ${step.selected ? " text-white font-bold  " : ""
              }`}
          >
            {step.completed ? (
              <span className='text-white font-bold text-xl'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='23'
                  height='23'
                  viewBox='0 0 23 23'
                  fill='none'
                >
                  <path
                    d='M11.5201 0.762251C13.6634 0.762251 15.7585 1.3978 17.5406 2.58853C19.3226 3.77926 20.7115 5.47168 21.5317 7.45179C22.3519 9.4319 22.5665 11.6108 22.1484 13.7128C21.7303 15.8149 20.6982 17.7458 19.1827 19.2613C17.6672 20.7768 15.7363 21.8089 13.6342 22.227C11.5321 22.6451 9.35329 22.4305 7.37318 21.6103C5.39307 20.7902 3.70064 19.4012 2.50991 17.6192C1.31919 15.8371 0.683638 13.742 0.683638 11.5987C0.679574 10.1745 0.957095 8.76357 1.50024 7.44699C2.04338 6.13041 2.84144 4.93419 3.84851 3.92712C4.85558 2.92005 6.0518 2.122 7.36838 1.57885C8.68495 1.03571 10.0959 0.758188 11.5201 0.762251Z'
                    fill='#6BCB77'
                  />
                  <path
                    d='M17.5239 8.61266L9.82754 16.309L5.51758 12.0298L7.27235 10.3059L9.82754 12.8303L15.7691 6.88867L17.5239 8.61266Z'
                    fill='white'
                  />
                </svg>
              </span>
            ) : (
              <span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='23'
                  height='23'
                  viewBox='0 0 23 23'
                  fill='none'
                >
                  <path
                    d='M11.7623 0.762251C13.9056 0.762251 16.0007 1.3978 17.7827 2.58853C19.5648 3.77926 20.9537 5.47168 21.7739 7.45179C22.5941 9.4319 22.8087 11.6108 22.3906 13.7128C21.9724 15.8149 20.9404 17.7458 19.4249 19.2613C17.9094 20.7768 15.9785 21.8089 13.8764 22.227C11.7743 22.6451 9.59548 22.4305 7.61537 21.6103C5.63526 20.7902 3.94283 19.4012 2.7521 17.6192C1.56137 15.8371 0.925825 13.742 0.925825 11.5987C0.921762 10.1745 1.19928 8.76357 1.74243 7.44699C2.28557 6.13041 3.08363 4.93419 4.0907 3.92712C5.09777 2.92005 6.29399 2.122 7.61056 1.57885C8.92714 1.03571 10.3381 0.758188 11.7623 0.762251Z'
                    fill='#878787'
                  />
                  <path
                    d='M17.7661 8.61266L10.0697 16.309L5.75977 12.0298L7.51454 10.3059L10.0697 12.8303L16.0113 6.88867L17.7661 8.61266Z'
                    fill='white'
                  />
                </svg>
              </span>
            )}
          </div>
        </div>
        <div
          className={`flex-auto border-t-2 transition duration-500 ease-in-out ${step.completed ? "border-[#6BCB77]" : "border-[#878787]"
            }`}
        ></div>
      </div>
    );
  });
  return (
    <div className='flex items-center justify-between  px-[69px] pt-[20px] pb-[35px] mb-16 mt-[54px] bg-[#F5F5F5] rounded-[15px]'>
      {displaySteps}
    </div>
  );
};

export default Stepper;
