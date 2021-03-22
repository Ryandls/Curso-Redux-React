import React from 'react';
import FamilaiMembro from './FamiliaMembro';

export default (props) => {
  return (
    <div>
      <FamilaiMembro nome="Pedro" sobrenome={props.sobrenome} />
      <FamilaiMembro nome="Ana" {...props} />
      <FamilaiMembro nome="Gustavo" sobrenome="Silva" />
    </div>
  );
};
