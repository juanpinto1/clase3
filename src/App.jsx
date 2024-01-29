import { useState } from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BaseColaboradores } from "./assets/BaseColaboradores";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import Buscador from "./components/Buscador";
import Alert from "./components/Alert";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [search, setSearch] = useState("");
  const [alert, setAlert] = useState({ error: "", msg: "", color: "" });

  const handleSubmit = (nuevoColaborador) => {
    const colaboradorConId = { ...nuevoColaborador, id: Date.now() };
    setColaboradores([...colaboradores, colaboradorConId]);
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const handleDelete = (colaboradorId) => {
    const updatedColaboradores = colaboradores.filter(
      (colaborador) => colaborador.id !== colaboradorId
    );
    setColaboradores(updatedColaboradores);
    setAlert({ error: "", msg: "Colaborador eliminado", color: "success" });
  };

  const filteredColaboradores = colaboradores.filter((colaborador) => {
    if (
      colaborador.nombre.toLowerCase().includes(search.toLowerCase()) ||
      colaborador.correo.toLowerCase().includes(search.toLowerCase()) ||
      colaborador.edad.toLowerCase().includes(search.toLowerCase()) ||
      colaborador.cargo.toLowerCase().includes(search.toLowerCase()) ||
      colaborador.telefono.toLowerCase().includes(search.toLowerCase())
    ) {
      return true;
    }
    return false;
  });
  return (
    <>
      <div className="mx-4">
      <h1 className="text-start">Lista de colaboradores</h1>
        <Row>
          <Col sm={4}>
            <Buscador search={search} onChange={handleChange} />
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={9}>
            <Listado colaboradores={filteredColaboradores} onDelete={handleDelete} />
          </Col>
          <Col md={3} className="">
            <h2>Agregar colaborador</h2>
            <Formulario onSubmit={handleSubmit} setAlert={setAlert} />
            {alert.msg && <Alert color={alert.color}>{alert.msg}</Alert>}
          </Col>
        </Row>
      </div>
    </>
  );
}

export default App;
