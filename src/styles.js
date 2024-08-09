import styled from "styled-components";
import colors from "./colors";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: radial-gradient(
    45.57% 82.82% at 50% 17.19%,
    #2e3240 0%,
    #202433 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Content = styled.div`
  background-color: #121212;
  width: 100%;
  max-width: 388px;
  min-height: 350px;
  border-radius: 36px;
  border: 1px rgba(0, 0, 0, 0.5);
  padding: 16px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;
export const Column = styled.div`
  display: flex;

  width: 100%;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
export const Footer = styled.div`
  margin-top: 20px;
  padding: 10px;
  color: #3d405a;
  text-align: center;
  font-size: 12px;
`;
