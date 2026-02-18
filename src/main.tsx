import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import HelloWorld from './HelloWorld';
import PrintMessage from './PrintMessage';
import PrintMessage1 from './PrintMessage';
import Contador from './Contador';
import Arreglos from './arrays';


ReactDOM.createRoot(document.getElementById('root')!)
.render(
  <React.StrictMode>
  <HelloWorld/>
  <PrintMessage message="Como te va?"/>
  <PrintMessage message="Soy un mensaje"/>
  <PrintMessage1 numero= {10}/>
  <Contador numero1= {14}></Contador>
  <Arreglos/>


</React.StrictMode>
)
