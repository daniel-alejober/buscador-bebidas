import { useContext } from "react";
import BebidasProvider from "../context/BebidasProvider";

const useBebidas = () => {
  return useContext(BebidasProvider);
};
export default useBebidas;
