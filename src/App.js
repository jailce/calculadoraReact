import Input from "./components/Input";
import Button from "./components/Button";
import { Container, Content, Row, Column, Footer } from "./styles";
import colors from "./colors";
import { useState } from "react";

const App = () => {
  //useStates
  const [currentNumber, setCurrentNumber] = useState("0");
  const [previousNumber, setPreviousNumber] = useState("0");
  const [operation, setOperation] = useState("");

  const handleOnClear = () => {
    setCurrentNumber("0");
    setPreviousNumber("0");
    setOperation("");
  };

  // ${prev === "0" ? "" : prev}
  //Lógica de input no display
  const handleAddNumber = (num) => {
    setCurrentNumber((prev) => {
      if (prev === "0") {
        prev = "";
        return `${prev}${num}`;
      } else {
        return `${prev}${num}`;
      }
    });
  };
  //Lógica da soma
  const handleSum = () => {
    if (previousNumber === "0") {
      setPreviousNumber(String(currentNumber));
      setCurrentNumber("");
      setOperation("+");
    } else {
      const sum = Number(previousNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation("");
    }
  };

  //Lógica da subtração
  const handleSub = () => {
    if (previousNumber === "0") {
      setPreviousNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("-");
    } else {
      const sub = Number(previousNumber) - Number(currentNumber);
      setCurrentNumber(String(sub));
      setOperation("");
    }
  };

  //Lógica da multiplicação
  const handleMult = () => {
    if (previousNumber === "0") {
      setPreviousNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("*");
    } else {
      const mult = Number(previousNumber) * Number(currentNumber);
      setCurrentNumber(String(mult));
      setOperation("");
    }
  };

  //Logica Divisão
  const handleDivn = () => {
    if (previousNumber === "0") {
      setPreviousNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("/");
    } else {
      const divn = Number(previousNumber) / Number(currentNumber);
      setCurrentNumber(String(divn));
      setOperation("");
    }
  };

  //Lógica da equalização
  const handleEquals = () => {
    if (previousNumber !== "0" && operation != "" && currentNumber != "0") {
      switch (operation) {
        case "+":
          handleSum();
          break;
        case "-":
          handleSub();
          break;
        case "*":
          handleMult();
          break;
        case "/":
          handleDivn();
          break;
        default:
          break;
      }
    }
  };
  //return
  return (
    <Container>
      <Column>
        <Content>
          <Input value={currentNumber} />

          <Row>
            <Button label="C" color={colors.red} onClick={handleOnClear} />
            <Button
              label="&#x00F7;"
              color={colors.primary}
              onClick={handleDivn}
            />
          </Row>
          <Row>
            <Button label="7" onClick={() => handleAddNumber("7")} />
            <Button label="8" onClick={() => handleAddNumber("8")} />
            <Button label="9" onClick={() => handleAddNumber("9")} />
            <Button
              label="&#x00D7;"
              color={colors.primary}
              onClick={handleMult}
            />
          </Row>
          <Row>
            <Button label="4" onClick={() => handleAddNumber("4")} />
            <Button label="5" onClick={() => handleAddNumber("5")} />
            <Button label="6" onClick={() => handleAddNumber("6")} />
            <Button
              label="&#x2212;"
              color={colors.primary}
              onClick={handleSub}
            />
          </Row>
          <Row>
            <Button label="1" onClick={() => handleAddNumber("1")} />
            <Button label="2" onClick={() => handleAddNumber("2")} />
            <Button label="3" onClick={() => handleAddNumber("3")} />
            <Button
              label="&#x002B;"
              color={colors.primary}
              onClick={handleSum}
            />
          </Row>

          <Row>
            <Button label="&#x2190;" color={colors.primary} />
            <Button label="0" onClick={() => handleAddNumber("0")} />
            <Button label="," onClick={() => handleAddNumber(".")} />
            <Button
              label="&#x003D;"
              bgSpecial={colors.primaryGradient}
              hoverSpecial={colors.primaryHover}
              onClick={handleEquals}
            />
          </Row>
        </Content>
        <Footer>Jailce Fernanda &copy; 2024</Footer>
      </Column>
    </Container>
  );
};

export default App;
