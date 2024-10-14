import React, { useState } from "react";
import Input from "./components/Input/input-index";
import Button from "./components/Button/button-index";
import { Container, Content, Row } from "./styles";

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');  // Número atual no display
  const [firstNumber, setFirstNumber] = useState(null);     // Primeiro número digitado
  const [operation, setOperation] = useState(null);         // Operação selecionada

  const handleAddNumber = (number) => {
    setCurrentNumber(prev => prev === '0' ? `${number}` : `${prev}${number}`);
  };

  const handleSetOperation = (operator) => {
    if (currentNumber === '0' && operator === '÷') {
      alert("Não é possível dividir por zero."); // Verifica divisão por zero
      return;
    }
    
    setFirstNumber(currentNumber);   // Armazena o primeiro número digitado
    setCurrentNumber('0');           // Reseta o número atual para digitar o próximo
    setOperation(operator);          // Armazena a operação
  };

  const handleEquals = () => {
    if (firstNumber && operation) {
      let result;
      const parsedFirstNumber = parseFloat(firstNumber);
      const parsedSecondNumber = parseFloat(currentNumber);

      switch (operation) {
        case '+':
          result = parsedFirstNumber + parsedSecondNumber;
          break;
        case '-':
          result = parsedFirstNumber - parsedSecondNumber;
          break;
        case 'x':
          result = parsedFirstNumber * parsedSecondNumber;
          break;
        case '÷':
          if (parsedSecondNumber === 0) {
            alert("Não é possível dividir por zero."); // Adiciona alerta para divisão por zero
            return;
          }
          result = parsedFirstNumber / parsedSecondNumber;
          break;
        default:
          return;
      }

      setCurrentNumber(result.toString());
      setFirstNumber(null);      // Limpa o primeiro número
      setOperation(null);        // Limpa a operação
    }
  };

  const handleClear = () => {
    setCurrentNumber('0');
    setFirstNumber(null);
    setOperation(null);
  };

  const handlePercentage = () => {
    setCurrentNumber((parseFloat(currentNumber) / 100).toString());
  };

  const handleToggleSign = () => {
    setCurrentNumber((parseFloat(currentNumber) * -1).toString());
  };

  const handleSquareRoot = () => {
    const parsedNumber = parseFloat(currentNumber);
    if (parsedNumber < 0) {
      alert("Raiz quadrada de números negativos não é permitida."); // Adiciona alerta para raiz quadrada negativa
      return;
    }
    setCurrentNumber(Math.sqrt(parsedNumber).toString());
  };

  const handleSquare = () => {
    setCurrentNumber(Math.pow(parseFloat(currentNumber), 2).toString());
  };

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label={"%"} onClick={handlePercentage} />
          <Button label={"CE"} onClick={handleClear} /> {/* Limpa tudo */}
          <Button label={"C"} onClick={handleClear} />
          <Button label={"x"} onClick={() => handleSetOperation('x')} />
        </Row>
        <Row>
          <Button label={"⅟x"} onClick={() => setCurrentNumber((1 / parseFloat(currentNumber)).toString())} />
          <Button label={"x²"} onClick={handleSquare} />
          <Button label={"√x"} onClick={handleSquareRoot} />
          <Button label={"÷"} onClick={() => handleSetOperation('÷')} />
        </Row>
        <Row>
          <Button label={"7"} onClick={() => handleAddNumber('7')} />
          <Button label={"8"} onClick={() => handleAddNumber('8')} />
          <Button label={"9"} onClick={() => handleAddNumber('9')} />
          <Button label={"x"} onClick={() => handleSetOperation('x')} />
        </Row>
        <Row>
          <Button label={"4"} onClick={() => handleAddNumber('4')} />
          <Button label={"5"} onClick={() => handleAddNumber('5')} />
          <Button label={"6"} onClick={() => handleAddNumber('6')} />
          <Button label={"-"} onClick={() => handleSetOperation('-')} />
        </Row>
        <Row>
          <Button label={"1"} onClick={() => handleAddNumber('1')} />
          <Button label={"2"} onClick={() => handleAddNumber('2')} />
          <Button label={"3"} onClick={() => handleAddNumber('3')} />
          <Button label={"+"} onClick={() => handleSetOperation('+')} />
        </Row>
        <Row>
          <Button label={"+/-"} onClick={handleToggleSign} />
          <Button label={"0"} onClick={() => handleAddNumber('0')} />
          <Button label={","} onClick={() => handleAddNumber('.')} />
          <Button label={"="} onClick={handleEquals} />
        </Row>
      </Content>
    </Container>
  );
};

export default App;
