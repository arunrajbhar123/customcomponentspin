import PropTypes from "prop-types";

import React, { useState, useRef,useEffect } from "react";
import styled from "styled-components";

const Otp = ({ otpLength=6 }) => {
  const [otpSize, setOtpSize] = useState(new Array(otpLength).fill("_"));
  const inputReference = useRef([]);
  useEffect(() => {
    inputReference.current[0].focus()
  }, []);
  

  const handleNextInputPro = (e, index) => {
    otpSize[index] = e.target.value;
    setOtpSize(otpSize);
    if (e.target.value > 0 && index < otpLength - 1) {
      inputReference.current[index + 1].focus();
    }

    if (index > 0) {
      if (e.keyCode === 8) {
        if (inputReference.current[index].value === "") {
          inputReference.current[index - 1].focus();
        }
      }
    }
  };

  const handleOnPaste = (e) => {
    e.preventDefault();
    const data = e.clipboardData
      .getData("text")
      .split("")
      .filter((item, index) => index < otpLength);
    data.forEach((value, index) => {
      otpSize[index] = value;
      inputReference.current[index].value = value;
      if (index < otpLength - 1) {
        inputReference.current[index + 1].focus();
      }
    });
  };
  
   

  return (
    <div>
      {otpSize &&
        otpSize.map((el, index) => (
          <InputWrapper
          onPaste={handleOnPaste}
            key={index}
            ref={(element) => {
              inputReference.current[index] = element;
            }}
            maxLength={1}
            onKeyUp={(e) => handleNextInputPro(e, index)}
          />
        ))}
    </div>
  );
};

export default Otp;

Otp.propTypes = {
  otpLength: PropTypes.number,
  onChange: PropTypes.func,
};

const InputWrapper = styled.input`
  margin: 2px;
  padding: 12px;
  width: 30px;
  text-align: center;
  font-size: 18px;
  border: none;
  border-bottom: 2px solid #111;
  outline: none;
`;
