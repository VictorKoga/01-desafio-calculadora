import styled from 'styled-components';

// Container principal que centraliza a calculadora na tela
export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #1c1c1e;  /* Fundo escuro e elegante para a página inteira */
  display: flex;
  align-items: center;
  justify-content: center;
`;

// Content que envolve a calculadora
export const Content = styled.div`
  background-color: #2c2c2e;  /* Fundo do corpo da calculadora */
  width: 320px;  /* Largura fixa para garantir um layout compacto */
  padding: 20px;  /* Espaçamento interno */
  border-radius: 20px;  /* Bordas arredondadas para um estilo suave e moderno */
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.6);  /* Sombra para elevar o conteúdo e dar profundidade */
  display: flex;
  flex-direction: column;
`;

// Row que organiza os botões horizontalmente
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;  /* Espaçamento igual entre os botões */
  align-items: center;
  margin-bottom: 10px;  /* Espaçamento entre as linhas */
`;

// Column, se necessário para colunas verticais (pouco usado aqui, mas preparado para layouts futuros)
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;  /* Garante que a coluna ocupe toda a largura disponível */
`;
