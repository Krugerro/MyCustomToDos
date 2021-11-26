import { useContext } from "react";
import { StoreContext } from "../store/provider";

const Footer : React.FC< {} > = ({}) => {
    
    const {store, dispatch} = useContext(StoreContext);
  return (
      <></>
  )
}

export default Footer;