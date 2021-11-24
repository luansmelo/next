import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  top: 0;
  right: 0;
  width: 100%;
  background: black;
  z-index: 999;

  .img-logo {
    width: 80px;
    margin-top: 12px;
    margin-bottom: 12px;
    margin-left: 20px;
  }

  @media screen and (max-width: 576px) {
    width: 100%;
  }
`;

const Button = styled.button`
  background-color: transparent;
  color: yellow;
  border: 1px solid white;
  padding: 7px;
  margin: 16px;
  border-radius: 5px;
  transition-duration: 400ms;
  height: 30px;

  &:hover {
    background-color: white;
    color: black;
  }

  @media screen and (max-width: 576px) {
    width: 70px;
    font-size: 15px;
  }
`;

export { Container, Button };
