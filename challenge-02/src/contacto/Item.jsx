export default function Item({ contacto, eliminar}){
    return (
        <li style= {{ marginBottom:8 }}>
            <span>
                <strong>{contacto.name}</strong> - {contacto.phone}
            </span>
            <button onClick={()=> eliminar(contacto.id)}>
                Eliminar
            </button>


        </li>
    );
}