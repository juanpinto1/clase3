import Table from 'react-bootstrap/Table';

const Listado = ({ colaboradores, onDelete }) => {
return (
    <>
    <Table responsive striped bordered>
        <thead>
        <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Edad</th>
            <th>Cargo</th>
            <th>Telefono</th>
        </tr>
        </thead>
        <tbody>
        {colaboradores.map((colaborador) => (
            <tr key={colaborador.id}>
            <td>{colaborador.nombre}</td>
            <td>{colaborador.correo}</td>
            <td>{colaborador.edad}</td>
            <td>{colaborador.cargo}</td>
            <td>{colaborador.telefono}</td>
            <td>
                <button
                className="btn btn-danger btn-sm"
                onClick={() => onDelete(colaborador.id)}
                >
                Eliminar
                </button>
            </td>
            </tr>
        ))}
        </tbody>
    </Table>
    
    </>
);
};

export default Listado;