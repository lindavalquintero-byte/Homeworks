import Item from "./Item.jsx";

export default function Lista({ contacto, eliminar}){
    if(contacto.length === 0){
        return <p>No hay contactos. :C </p>;
    }

    return (
        <ul>
            {contacto.map((c) => (
                <Item key={c.id} contacto={c} eliminar={eliminar} />
            ))}
        </ul>
    );
}