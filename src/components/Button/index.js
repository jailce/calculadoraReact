import { ButtonContainer } from "./styles";

const Button = ({ label, onClick, color, bgSpecial, hoverSpecial}) => {
  return (
    <ButtonContainer onClick={onClick} color={color} bgSpecial={bgSpecial} hoverSpecial={hoverSpecial}>
      {label}
    </ButtonContainer>
  );
};

export default Button;
