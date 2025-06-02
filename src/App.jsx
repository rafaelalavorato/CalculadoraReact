import Input from './components/Input';
import Button from './components/Button';
import { Container, Content, Row } from "./styles";
import { useCalculator } from './useCalculator';

const App = () => {
  const {
    currentNumber,
    firstNumber,
    operation,
    handleOnClear,
    handleAddNumber,
    prepareOperation,
    handleEquals
  } = useCalculator();

  const displayValue = operation
    ? `${firstNumber} ${operation} ${currentNumber === '0' ? '' : currentNumber}`
    : currentNumber;

  return (
    <Container>
      <Content>
        <Input value={displayValue}/>
        <Row>
          <Button label="AC" onClick={handleOnClear} />
          <Button label="%" onClick={() => prepareOperation('%')} />
          <Button label="/" onClick={() => prepareOperation('/')} />
          <Button label="*" onClick={() => prepareOperation('*')} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')} />
          <Button label="8" onClick={() => handleAddNumber('8')} />
          <Button label="9" onClick={() => handleAddNumber('9')} />
          <Button label="-" onClick={() => prepareOperation('-')} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')} />
          <Button label="5" onClick={() => handleAddNumber('5')} />
          <Button label="6" onClick={() => handleAddNumber('6')} />
          <Button label="+" onClick={() => prepareOperation('+')} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')} />
          <Button label="2" onClick={() => handleAddNumber('2')} />
          <Button label="3" onClick={() => handleAddNumber('3')} />
          <Button label="0" onClick={() => handleAddNumber('0')} />
        </Row>
        <Row>
          <Button label="=" onClick={handleEquals} />
        </Row>
      </Content>
    </Container>
  );
};

export default App;
