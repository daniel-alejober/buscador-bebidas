import { useState, useEffect, createContext } from "react";
import { consultarBebida, recetaApi } from "../request/request";

const BebidasContext = createContext();

const BebidasProvider = ({ children }) => {
  const [bebidas, setBebidas] = useState([]);
  const [modal, setModal] = useState(false);
  const [bebidaId, setBebidaId] = useState(null);
  const [receta, setReceta] = useState({});

  const handleModal = () => {
    setModal(!modal);
  };
  useEffect(() => {
    const obtenerReceta = async () => {
      if (!bebidaId) return;
      const data = await recetaApi(bebidaId);
      setReceta(data.drinks[0]);
    };
    obtenerReceta();
  }, [bebidaId]);

  return (
    <BebidasContext.Provider
      value={{
        bebidas,
        modal,
        receta,
        setBebidas,
        consultarBebida,
        handleModal,
        setBebidaId,
        setReceta,
      }}
    >
      {children}
    </BebidasContext.Provider>
  );
};

export { BebidasProvider };
export default BebidasContext;
