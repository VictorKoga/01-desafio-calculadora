import styled from 'styled-components';

export const InputContainer = styled.div`
  width: 100%;
  height: 100px;  /* Aumenta a altura para dar mais espaço ao display */
  background-color: #1c1c1e;  /* Cor escura para o fundo */
  border-radius: 10px;  /* Bordas arredondadas para manter o design moderno */
  box-shadow: inset 0px 4px 6px rgba(0, 0, 0, 0.5);  /* Sombra interna para profundidade */

  display: flex;
  align-items: center;
  justify-content: flex-end;

  font-size: 36px;  /* Aumenta o tamanho da fonte para maior clareza no display */
  font-family: 'Roboto', sans-serif;  /* Usei Roboto com fallback */
  color: white;  /* O texto será branco para destacar no fundo escuro */
  padding-right: 15px;  /* Espaçamento à direita para que os números não fiquem encostados */

  input {
    padding: 0 10px;
    width: 100%;  /* O input ocupa toda a largura disponível */
    height: 100%;  /* O input ocupa toda a altura do container */
    background-color: transparent;  /* O input herda o fundo do container */
    border: none;  /* Remove a borda padrão do input */
    text-align: right;  /* Alinha o texto à direita */
    color: white;  /* Texto do input branco para se destacar no fundo */
    font-size: 36px;  /* O tamanho da fonte acompanha o container */
    font-family: 'Roboto', sans-serif;
    outline: none;  /* Remove a borda ao focar no input */
  }
`;
