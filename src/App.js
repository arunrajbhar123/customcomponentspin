import "./App.css";
import Otp from "./components/Otp";
import styled from "styled-components";

function InputOtp() {
  return (
    <div className="App">
      <OtpWrapper>
        <h1>OTP(One-Time-Password) Section</h1>
        <Otp  />
      </OtpWrapper>
    </div>
  );
}

export default InputOtp;
const OtpWrapper = styled.div`
  border: 1px solid #111;
  height: auto;
  margin: 1rem 5rem;
  padding: 12px;
`;
