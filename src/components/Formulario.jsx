import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Formulario = ({ onSubmit, setAlert }) => {
const [colaborador, setColaborador] = useState({
    nombre: "",
    correo: "",
    edad: "",
    cargo: "",
    telefono: "",
});

const handleChange = (e) => {
    setColaborador({
    ...colaborador,
    [e.target.name]: e.target.value,
    });
};

const handleSubmit = (e) => {
    e.preventDefault();
    if (
    colaborador.nombre === "" ||
    colaborador.correo === "" ||
    colaborador.edad === "" ||
    colaborador.cargo === "" ||
    colaborador.telefono === ""
    ) {
    setAlert({
        error: true,
        msg: "Completa todos los campos !",
        color: "danger",
    });
    return;
    }

    onSubmit(colaborador);
    
    setAlert({
    error: false,
    msg: "Colaborador agregado exitosamente !",
    color: "success",
    });
    setColaborador({
    nombre: "",
    correo: "",
    edad: "",
    cargo: "",
    telefono: "",
    });
};

return (
    <>
    <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Control
            type="text"
            placeholder="Nombre del colaborador"
            name="nombre"
            className="my-3"
            onChange={handleChange}
            value={colaborador.nombre}
        />
        <Form.Control
            type="email"
            placeholder="Email del colaborador"
            name="correo"
            className="my-3"
            onChange={handleChange}
            value={colaborador.correo}
        />
        <Form.Control
            type="text"
            placeholder="Edad del colaborador"
            name="edad"
            className="my-3"
            onChange={handleChange}
            value={colaborador.edad}
        />
        <Form.Control
            type="text"
            placeholder="Cargo del colaborador"
            name="cargo"
            className="my-3"
            onChange={handleChange}
            value={colaborador.cargo}
        />
        <Form.Control
            type="text"
            placeholder="Teléfono del colaborador"
            name="telefono"
            className="my-3"
            onChange={handleChange}
            value={colaborador.telefono}
        />
        <Button variant="primary" type="submit" className="w-100">
            Agregar colaborador
        </Button>
        </Form.Group>
    </Form>
    </>
);
};

export default Formulario;
