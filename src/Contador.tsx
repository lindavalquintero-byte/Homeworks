import { useState } from 'react';

interface prop{
    numero1:number,
}
    
function Contador({numero1}: prop){
    const [contador, setContador] = useState(numero1);

    return(
        <>
        <p>Contador:{contador}</p>
        <button onClick={()=> setContador(contador + 1)}>
            Sumar
        </button>
        <button onClick={()=> setContador(contador - 1)}>
            Restar
        </button>
        <button onClick={()=> setContador(numero1)}>
            Reset
        </button>
        </>
    );
}
export default Contador;