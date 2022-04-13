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
