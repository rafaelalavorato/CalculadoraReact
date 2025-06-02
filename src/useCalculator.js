import { useState } from 'react';

export const useCalculator = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
  };

  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`);
  };

  const prepareOperation = (op) => {
    if (firstNumber === '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation(op);
    } else {
      handleEquals();
      setOperation(op);
    }
  };

  const handleEquals = () => {
    if (firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
      let result;
      const n1 = Number(firstNumber);
      const n2 = Number(currentNumber);

      switch (operation) {
        case '+':
          result = n1 + n2;
          break;
        case '-':
          result = n1 - n2;
          break;
        case '*':
          result = n1 * n2;
          break;
        case '/':
          result = n1 / n2;
          break;
        case '%':
          result = n1 * (n2 / 100);
          break;
        default:
          return;
      }

      setCurrentNumber(String(result));
      setFirstNumber('0');
      setOperation('');
    }
  };

  return {
    currentNumber,
    firstNumber,
    operation,
    handleOnClear,
    handleAddNumber,
    prepareOperation,
    handleEquals
  };
};
