import { useState, useEffect, createContext } from "react";
import { obtenerCategorias } from "../request/request";

const CategoriaContext = createContext();

const CategoriaProvider = ({ children }) => {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const dataCategorias = async () => {
      const categoriasData = await obtenerCategorias();
      setCategorias(categoriasData.drinks);
    };
    dataCategorias();
  }, []);

  return (
    <CategoriaContext.Provider
      value={{
        categorias,
      }}
    >
      {children}
    </CategoriaContext.Provider>
  );
};

export { CategoriaProvider };
export default CategoriaContext;
