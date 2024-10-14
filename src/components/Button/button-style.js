import styled from 'styled-components';

export const ButtonContainer = styled.button`
  padding: 20px;
  border: none;  /* Remove a borda para um visual mais limpo */
  background-color: ${props => props.special ? '#ff9500' : '#3a3a3c'};  /* Botões especiais em laranja */
  color: white;
  font-size: 24px;
  font-weight: bold;
  border-radius: 10px;  /* Bordas arredondadas para um estilo moderno */
  cursor: pointer;
  flex: 1;
  margin: 5px;  /* Adiciona um pequeno espaço entre os botões */
  transition: background-color 0.2s ease, transform 0.1s ease;  /* Suave transição de cor e efeito de clique */

  /* Efeito de hover */
  &:hover {
    background-color: ${props => props.special ? '#ffb84d' : '#4d4d4d'};
    opacity: 0.9;
  }

  /* Efeito de clique */
  &:active {
    transform: scale(0.95);  /* Pequena redução para efeito de "pressionado" */
    background-color: ${props => props.special ? '#cc7a00' : '#5c5c5e'};
  }

  /* Efeito de foco ao navegar com o teclado */
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(255, 149, 0, 0.5);  /* Realça o botão com foco */
  }
`;
