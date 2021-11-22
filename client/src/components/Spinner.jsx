import { useContext } from "react";
import styled, { keyframes } from "styled-components";
import { StoreContext } from "../store/provider";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const SpinnerObject = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  border-top: 2px solid grey;
  border-right: 2px solid grey;
  border-bottom: 2px solid grey;
  border-left: 4px solid black;
  background: transparent;
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;

const Dialog = styled.dialog`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

const Spinner = () => {
    const {store} = useContext(StoreContext);
    return (  
    <Dialog open = {store.isLoading}>
        <SpinnerObject/>
    </Dialog>
    );
}
export default Spinner;