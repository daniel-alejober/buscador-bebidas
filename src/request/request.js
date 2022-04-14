import axios from "axios";

const urlCocktail = "https://www.thecocktaildb.com/api/json/v1/1/";

export const obtenerCategorias = async () => {
  try {
    const url = `${urlCocktail}list.php?c=list`;
    const { data } = await axios(url);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const consultarBebida = async (datos) => {
  try {
    const url = `${urlCocktail}filter.php?i=${datos.nombre}&c=${datos.categoria}`;
    const { data } = await axios(url);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const recetaApi = async (id) => {
  try {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
    const { data } = await axios(url);
    return data;
  } catch (error) {
    console.log(error);
  }
};
