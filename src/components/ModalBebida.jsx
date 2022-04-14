import { Modal, Image } from "react-bootstrap";
import useBebidas from "../hooks/useBebidas";

const ModalBebida = () => {
  const { handleModal, modal, receta, setReceta } = useBebidas();
  console.log(receta);

  const mostrarIngredientes = () => {
    let ingredientes = [];

    for (let i = 1; i < 16; i++) {
      /*es una forma de acceder a la propiedad de un objeto */
      if (receta[`strIngredient${i}`]) {
        ingredientes.push(
          <li key={i}>
            {receta[`strIngredient${i}`]}-{receta[`strMeasure${i}`]}
          </li>
        );
      }
    }
    return ingredientes;
  };

  return (
    <Modal
      show={modal}
      onHide={() => {
        handleModal();
        setReceta({});
      }}
    >
      <Image src={receta.strDrinkThumb} alt={receta.strDrink} />
      <Modal.Header>
        <Modal.Title>{receta.strDrink}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="p-3">
          <h2>Instrucciones</h2>
          {receta.strInstructions}
          <h2 className="mt-2">Ingredientes y Cantidades</h2>
          {mostrarIngredientes()}
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ModalBebida;
