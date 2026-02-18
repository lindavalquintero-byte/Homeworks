interface Props {
    message?:string;
    numero?:number;
    
}
function PrintMessage ({message}: Props){
    return(<>
    <h3>{message}</h3>
    
    </>)
}
function PrintMessage1 ({numero}: Props){
    return(<>

    <h2>{numero}</h2>
    </>)
}

export default PrintMessage
export {PrintMessage1};