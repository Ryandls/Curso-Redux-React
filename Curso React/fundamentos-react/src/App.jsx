import React from 'react';
import './App.css';

import Familia from './components/basicos/Familia';
import FamiliaMembro from './components/basicos/FamiliaMembro';
import Card from './components/layout/Card.jsx';
import First from './components/basicos/First';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from './components/basicos/Aleatorio';

export default (_) => (
  <div className="App">
    <h1>Fundamentos React</h1>
    <div className="Cards">
      <Card titulo="#05 - Componente com filhos" color="#00c8f8">
        <Familia sobrenome="Silva">
          <FamiliaMembro nome="Pedro" />
          <FamiliaMembro nome="Ana" />
          <FamiliaMembro nome="Gustavo" />
        </Familia>
      </Card>

      <Card titulo="#04 - Desafio Aleatório" color="#FA6900">
        <Aleatorio min={1} max={60} />
      </Card>

      <Card titulo="#03 - Fragmento" color="#E94c6f">
        <Fragmento />
      </Card>
      <Card titulo="#02 - Com Parâmetro" color="#E8b71a">
        <ComParametro
          titulo="Situação do Aluno"
          aluno="Pedro Silva"
          nota="9.3"
        />
      </Card>

      <Card titulo="#01 - First" color="#588c73">
        <First></First>
      </Card>
    </div>
  </div>
);
