import React from 'react';
import { InputContainer } from './input-style'; // Ajuste o caminho conforme necessário

// Desestruture as props para pegar o valor corretamente
const Input = ({ value }) => {
  return (
    <InputContainer>
      <input disabled value={value} />
    </InputContainer>
  );
}

export default Input;
