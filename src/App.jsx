import Formulario from "./components/Formulario";
import ListadoBebidas from "./components/ListadoBebidas";
import { Container } from "react-bootstrap";
import { CategoriaProvider } from "./context/CategoriaProvider";
import { BebidasProvider } from "./context/BebidasProvider";

function App() {
  return (
    <CategoriaProvider>
      <BebidasProvider>
        <header className="py-5">
          <h1>Buscador de Bebidas</h1>
        </header>
        <Container className="mt-5">
          <Formulario />
          <ListadoBebidas />
        </Container>
      </BebidasProvider>
    </CategoriaProvider>
  );
}

export default App;
