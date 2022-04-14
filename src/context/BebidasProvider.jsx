import { useState, createContext } from "react";
import { consultarBebida } from "../request/request";

const BebidasContext = createContext();

const BebidasProvider = ({ children }) => {
  const [bebidas, setBebidas] = useState([]);

  return (
    <BebidasContext.Provider
      value={{
        bebidas,
        setBebidas,
        consultarBebida,
      }}
    >
      {children}
    </BebidasContext.Provider>
  );
};

export { BebidasProvider };
export default BebidasContext;
