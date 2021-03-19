import React from 'react';

import First from './components/basicos/First';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from './components/basicos/Aleatorio';

export default (_) => (
  <div>
    <Aleatorio min={1} max={60} />
    <h1>Fundamentos React</h1>
    <Fragmento></Fragmento>
    <ComParametro titulo="Situação do Aluno" aluno="Pedro Silva" nota="9.3" />
    <First></First>
  </div>
);
