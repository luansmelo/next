import styled, { keyframes } from "styled-components";

const Animation = keyframes`
  from{
    opacity: 0;
    transform: translateY(20px);
  }

  to{
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  max-height: 100%;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1080px;
  height: 100%;
  margin: 0 auto;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  min-height: 400px;
  animation: ${Animation} backwards 300ms;
  img {
    position: relative;
    width: 150px;
    margin-bottom: 20px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export { Container, Content, Form };
